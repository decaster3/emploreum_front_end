import { readContractFromAddress, web3 } from './contract'
let config = require('./config.json')

// return promise with address

export function generateCompanyAddress (company) {
  let password = generatePassword(company.name)
  return web3.eth.personal.newAccount(password)
    .then(address => {
      console.log('address: ', address, ' generated for employee ', company)
      savePassword(address, password)
      return address
    })
}

// return promise with address

export function generateEmploeeAddress (employee) {
  let password = generatePassword(employee.firstName)
  return web3.eth.personal.newAccount(password)
    .then(address => {
      console.log('address: ', address, ' generated for employee ', employee)
      savePassword(address, password)
      return address
    })
}

// TODO
function generatePassword (s) {
  console.log('password generator should be rewritten')
  return web3.utils.keccak256(s)
}

// TODO
function savePassword (address, password) {
  console.log('Misha should write that method')
}

export function registerEmploee (employee, address) {
  let path = config.create_contract_path
  let gas = config.create_contract_gas_count

  return readContractFromAddress(path, address).then(contract => {
    contract.contract.newEmployee('_firstName', '_lastName', '_email', 1, employee, { gas }).then(data => {
      console.log('employee registeration complite!')
      console.log('transaction hash: ', data.tx)
      return true
    }).catch(err => {
      console.log(err)
      return false
    })
  })
}
