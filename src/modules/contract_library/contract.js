import Web3 from 'web3'
import Web3InitError from './Web3Error'
let contractService = require('truffle-contract')
var web3

export function initWeb3 () {
  if (window.web3) {
    web3 = new Web3(window.web3.currentProvider)
  } else {
    web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'))
  }
  return web3
}

// return Promise with contract instance

export function readContract (contractInfo) {
  let contract = initContract(contractInfo)
  return contract.deplyed()
}

// return Promise with contract instance

export function readContractFromAddress (contractInfo, address) {
  let contract = initContract(contractInfo)
  return contract.at(address)
}

// return Promise with contract instance

export function createContract (contractInfo, gas) {
  let contract = initContract(contractInfo)
  var args = Array.prototype.slice.call(arguments, 2)
  return contract.new(args, { gas })
}

function initContract (contractInfo) {
  if (!web3) {
    throw new Web3InitError()
  }

  let contract = contractService(contractInfo)
  contract.setProvider(web3.currentProvider)

  return contract
}
