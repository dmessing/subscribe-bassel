/* Define product categories in an object as a replacement for data models or DB structures */
const productCategories = {
    books: "Books",
    medical: "Medical Products",
    food: "Food",
    jewelry: "Jewelry",
    beauty: "Beauty Products",
    drinks: "drinks",
    alcohol: "Alcohol",
    other: "Other"
};

/* Define exempted product categories is an array */
const exemptedCategories = [productCategories.books, productCategories.food, productCategories.medical];

/* Define a registry of products to match products with categories*/ 
const products = [
    {
        name: "chocolates",
        category: productCategories.food,
        unit: {
            singular: "box",
            plural: "boxes"
        }
    },
    {
        name: "chocolate bar",
        category: productCategories.food,
    },
    {
        name: "book",
        category: productCategories.books
    },
    {
        name: "perfume",
        category: productCategories.beauty,
        unit: {
            singular: "bottle",
            plural: "bottles"
        }
    },
    {
        name: "headache pills",
        category: productCategories.medical,
        unit: {
            singular: "packet",
            plural: "packets"
        }
    },
    {
        name: "music CD",
        category: productCategories.other
    },
];

module.exports = {
    productCategories,
    exemptedCategories,
    products
}