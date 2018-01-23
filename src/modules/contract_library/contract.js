import Web3 from 'web3'
let contractService = require('truffle-contract')

export function initWeb3 () {
  var web3
  if (window.web3) {
    web3 = new Web3(window.web3.currentProvider)
  } else {
    web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'))
  }
  return web3
}

// return Promise with contract instance

export function readContract (web3, contractInfo) {
  let contract = initContract(web3, contractInfo)
  return contract.deplyed()
}

// return Promise with contract instance

export function readContractFromAddress (web3, contractInfo, address) {
  let contract = initContract(web3, contractInfo)
  return contract.at(address)
}

// return Promise with contract instance

export function createContract (web3, contractInfo, address, gas) {
  let contract = initContract(web3, contractInfo)
  var args = Array.prototype.slice.call(arguments, 4)
  return contract.new(args, { gas })
}

function initContract (web3, contractInfo) {
  let contract = contractService(contractInfo)
  contract.setProvider(web3.currentProvider)

  return contract
}
