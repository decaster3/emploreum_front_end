import { readContractFromAddress } from './contract'
let config = require('./config.json')

export function registerEmploee (web3, employee, address) {
  let path = config.create_contract_path
  let gas = config.create_contract_gas_count

  return readContractFromAddress(web3, path, address).then(contract => {
    contract.register(employee, { gas }).then(data => {
      console.log('employee registeration complite!')
      console.log('transaction hash: ', data.tx)
      return true
    }).catch(err => {
      console.log(err)
      return false
    })
  })
}
