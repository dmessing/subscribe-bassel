const { localProductRegex, importedProductRegex } = require('../constants/regex.js');

 const checkIfLocal = (string) => {
    const match = string.match(localProductRegex);
    return match[0] === string;
}

 const checkIfImported = (string) => {
    const match = string.match(importedProductRegex);
    return match[0] === string;
}


module.exports = {
    checkIfLocal,
    checkIfImported
}