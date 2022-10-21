const assembleProductDescription = (product, isPlural) => {
    return product?.unit ? 
        isPlural ? 
            `${product.unit.plural} of ${product.name}` 
            : `${product.unit.singular} of ${product.name}` 
        : product.name;
}

module.exports = {
    assembleProductDescription
}