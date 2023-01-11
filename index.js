// console.log('hello')
// const HDWalletProvider = require("@truffle/hdwallet-provider");
// const Web3 = require('web3');
// const Contract = require('web3-eth-contract');

let privateKey = 'd1b0454fd759ef63b02364e330d741f16db5386235da38ebabf50e621546d6cd'
// let privateKey = 'b1c64392621283762f63bbc42e64b4dfc7edcf3c0de45918b20427ace6670848'
// let url = "https://goerli.infura.io/v3/ce58d7af0a4a47ec9f3d18a3545f6d18"
let url = "http://127.0.0.1:7545"
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

var bytecode = "0x608060405234801561001057600080fd5b506127106000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506103d6806100656000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80637bd703e81461004657806390b98a111461009e578063f8b2cb4f14610104575b600080fd5b6100886004803603602081101561005c57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061015c565b6040518082815260200191505060405180910390f35b6100ea600480360360408110156100b457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610200565b604051808215151515815260200191505060405180910390f35b6101466004803603602081101561011a57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610359565b6040518082815260200191505060405180910390f35b600073" +
    "__ConvertLib____________________________6396e4ee3d61018184610359565b60026040518363ffffffff1660e01b8152600401808381526020018281526020019250505060206040518083038186803b1580156101be57600080fd5b505af41580156101d2573d6000803e3d6000fd5b505050506040513d60208110156101e857600080fd5b81019080805190602001909291905050509050919050565b6000816000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410156102515760009050610353565b816000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540392505081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a3600190505b92915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905091905056fea265627a7a723158207998e50ea384e51d6c582ec2bc865ffde98833901eebb60da7fcff8c463dde5c64736f6c63430005100032"

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

// // The address from the above deployment example
// let contractAddress = "0x0501Fcb528D4fDe11f6ab5D1a5bd7323d32CC71d";
//
// // We connect to the Contract using a Provider, so we will only
// // have read-only access to the Contract
// let contract = new ethers.Contract(contractAddress, abiJson, provider);
//
// contract.getBalance('0xa7Aa9A6D3D682b29D9C9e30Bb206c961d860861C').then((result) => {
//     console.log(result)
// });
//
// let contractWithSigner = contract.connect(wallet);
//
// contractWithSigner.sendCoin('0xa7Aa9A6D3D682b29D9C9e30Bb206c961d860861C',100).then((tx) => {
//     console.log(tx.hash)
//
//     tx.wait().then(()=>{
//         console.log('tx send success!')
//     })
// })

const deployFunc = async (abi,bytecode,wallet) => {
    let factory = new ethers.ContractFactory(abi, bytecode, wallet);

    let contract = await factory.deploy();

    console.log(contract.address);

    console.log(contract.deployTransaction.hash);

    await contract.deployed()

    return contract
}

let libabi = [
    {
        "constant": true,
        "inputs": [
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "conversionRate",
                "type": "uint256"
            }
        ],
        "name": "convert",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "convertedAmount",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "pure",
        "type": "function"
    }
]
let libbytecode = "0x60c3610025600b82828239805160001a60731461001857fe5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361060335760003560e01c806396e4ee3d146038575b600080fd5b606b60048036036040811015604c57600080fd5b8101908080359060200190929190803590602001909291905050506081565b6040518082815260200191505060405180910390f35b600081830290509291505056fea265627a7a72315820ba4c1b22795d8988ecc9597be14e7f2a6a0e7f09b4dc21ec8dc9f05c43850df764736f6c63430005100032"

deployFunc(libabi,libbytecode,wallet).then((contract) => {
    console.log("deploy lib success")
    console.log(contract.address)


    let replaceByteCode = bytecode.replace("__ConvertLib____________________________",contract.address.replace("0x",""))
    console.log(bytecode)
    console.log(replaceByteCode)

    deployFunc(abiJson,replaceByteCode,wallet).then(myContract => {
        console.log("deploy contract success")
        console.log(myContract.address)
    })

})

