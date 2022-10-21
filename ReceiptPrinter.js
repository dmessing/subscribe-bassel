const { checkIfImported, checkIfLocal } = require('./utils/regexCheckers.js');
const { assembleProductDescription } = require('./utils/productUtils');
const {products, exemptedCategories} = require('./constants/products.js');

class ReceiptPrinter {
    constructor(input) {
        this.input = input;
    }

    deconstructList(){
        const lines =  this.input;
        return lines.map((line, index) => {
            const isImported = checkIfImported(line);
            if(!isImported && !checkIfLocal(line)) {
                throw new Error(`Deconstruct - Error: Couldn't parse line ${index}`)
            };

            const words = line.split(' ');
            const quantity = words[0];
            const price = parseFloat(words[words.length - 1]);
            const description = words.slice(isImported ? 2 : 1, -2).join(' ');
            const category = 
                products.find((product) => 
                    description === assembleProductDescription(product, quantity > 1))?.category;
            const isExempted = !!exemptedCategories.find((cat) => cat === category);

            return {
                quantity,
                description,
                price,
                isExempted,
                isImported
            }
        });
    }

    printReceipt(){
        let totalTaxes = 0;
        let total = 0;
        const items = this.deconstructList();
        const lines = items.map(({quantity, description, price, isExempted, isImported}) => {

            const taxPercentage = (isExempted ? 0 : 0.1) + (isImported ? 0.05 : 0);
            const taxAmount = (Math.ceil(price * taxPercentage * 20)/20).toFixed(2) * quantity;
            const finalPrice = ((quantity * price) + taxAmount).toFixed(2);

            total += parseFloat(finalPrice);
            totalTaxes += taxAmount;

            return `${quantity}${isImported ? ' imported' : ''} ${description}: ${finalPrice}`;
        });

        lines.push(
            `Sales Taxes: ${totalTaxes.toFixed(2)}`,
            `Total: ${total.toFixed(2)}`
        );

        return lines;
    }
}

module.exports = ReceiptPrinter;