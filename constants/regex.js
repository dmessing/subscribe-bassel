const localProductRegex = /\d+ [\S\s]+ at (\d+(\.\d*)?)|(\.\d+)/;
const importedProductRegex = /\d+ imported [\S\s]+ at (\d+(\.\d*)?)|(\.\d+)/;

module.exports = {
    localProductRegex,
    importedProductRegex
}