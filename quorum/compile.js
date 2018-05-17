const path = require('path');
const fs = require('fs');
const solc = require('solc');

const simpleStoragePath = path.resolve(__dirname, 'contracts', 'SimpleStorage.sol');
const source = fs.readFileSync(simpleStoragePath, 'utf8');

module.exports = solc.compile(source, 1).contracts[':SimpleStorage'];
