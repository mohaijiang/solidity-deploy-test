// console.log('hello')
// const HDWalletProvider = require("@truffle/hdwallet-provider");
// const Web3 = require('web3');
// const Contract = require('web3-eth-contract');

// let privateKey = 'd1b0454fd759ef63b02364e330d741f16db5386235da38ebabf50e621546d6cd'
let privateKey = 'b1c64392621283762f63bbc42e64b4dfc7edcf3c0de45918b20427ace6670848'
let url = "https://goerli.infura.io/v3/ce58d7af0a4a47ec9f3d18a3545f6d18"
// let provider = new HDWalletProvider({
//     privateKeys: [
//         privateKey
//     ],
//     // providerOrUrl: "http://127.0.0.1:7545"
//     providerOrUrl: "https://goerli.infura.io/v3/ce58d7af0a4a47ec9f3d18a3545f6d18"
// });

// const web3 = new Web3(provider);



// var transactionObject = {
//     from: '0x5965483Aa8A2A7Beb6650D85210C2D6CEF6713B0',
//     to: '0x01Fda6D089285d8Ab16EF8197270Ac9e4E112842',
//     value: web3.utils.toWei('1', 'ether'),
//     data: web3.utils.toHex(234)
// }
//
// web3.eth.sendTransaction(transactionObject).then(console.log)

var abi =
    "[{\"inputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"_from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"_to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"receiver\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"sendCoin\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"sufficient\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"address\",\"name\":\"addr\",\"type\":\"address\"}],\"name\":\"getBalanceInEth\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"address\",\"name\":\"addr\",\"type\":\"address\"}],\"name\":\"getBalance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"}]"

const abiJson = JSON.parse(abi)

var bytecode = "0x608060405234801561001057600080fd5b506127106000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506103d6806100656000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80637bd703e81461004657806390b98a111461009e578063f8b2cb4f14610104575b600080fd5b6100886004803603602081101561005c57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061015c565b6040518082815260200191505060405180910390f35b6100ea600480360360408110156100b457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610200565b604051808215151515815260200191505060405180910390f35b6101466004803603602081101561011a57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610359565b6040518082815260200191505060405180910390f35b600073"

// var contract1 = new web3.eth.Contract(abiJson,'0x2C70BA55f1095496607761Ad72F24Db84d5f1f4c');

// contract1.deploy({
//     data: bytecode,
//     arguments: []
// }).send({
//     from: '0x5965483Aa8A2A7Beb6650D85210C2D6CEF6713B0',
// }).then(function(newContractInstance){
//     console.log(newContractInstance)
// })

//0xa7Aa9A6D3D682b29D9C9e30Bb206c961d860861C  aline部署
//0x0501Fcb528D4fDe11f6ab5D1a5bd7323d32CC71d  remix 部署
// contract1.methods.getBalance('0x0501Fcb528D4fDe11f6ab5D1a5bd7323d32CC71d').call().then()

// provider.engine.stop();


const ethers = require('ethers');

let provider = new ethers.providers.JsonRpcProvider(url);

// let provider = ethers.getDefaultProvider('goerli');
let wallet = new ethers.Wallet(privateKey, provider);

// The address from the above deployment example
let contractAddress = "0x0501Fcb528D4fDe11f6ab5D1a5bd7323d32CC71d";

// We connect to the Contract using a Provider, so we will only
// have read-only access to the Contract
let contract = new ethers.Contract(contractAddress, abiJson, provider);

contract.getBalance('0xa7Aa9A6D3D682b29D9C9e30Bb206c961d860861C').then((result) => {
    console.log(result)
});

let contractWithSigner = contract.connect(wallet);

contractWithSigner.sendCoin('0xa7Aa9A6D3D682b29D9C9e30Bb206c961d860861C',100).then((tx) => {
    console.log(tx.hash)

    tx.wait().then(()=>{
        console.log('tx send success!')
    })
})

