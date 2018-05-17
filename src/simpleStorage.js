import web3 from "./web3";

const address = "0xfA10db780d92C6f6E45700FF073C3E48D278e538";

const abi = [{
    "constant": true,
    "inputs": [],
    "name": "storedData",
    "outputs": [{"name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"name": "x", "type": "uint256"}],
    "name": "set",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}];

export default new web3.eth.Contract(abi, address);
