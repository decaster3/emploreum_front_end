import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as contractLibrary from '../../contract_library'

class Account extends Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }
  componentDidMount () {
    // console.log(contractLibrary)
    contractLibrary.initWeb3()
    var begin = (new Date()).getTime()
    var contractInfo = require('../../contract_library/abi/Contract.json')
    var address = '0x24959b8bECaCA482225aE24EF0d7b415e1c1c84a'
    let gas = 4465034
    // contractLibrary.createContract(contractInfo, gas, [], [], 1519827609, 1716924800, '0xF2f757BAE0F8681Da6315cED951b3ac566CB5ED7', '0xF54934698F6D4Daa0D6F8354A7599629DBAcb9EE', Math.pow(10, 12)).then(contract => {
    //   console.log(contract)
    // })
    contractLibrary.readContractFromAddress(contractInfo, address).then(contract => {
      console.log(contract)
      // contract.newEmployee("_firstName", "_lastName", "_email", 1, '0x002c7E60484a0B65034C5D70b887Eee4A2C0FFbb', [], [], []).then((data) => {
      //   console.log(data)
      //   console.log('created')
      // })
      // contract.getEmployee(0).then(data => {
      //   console.log('contract data: ', data)
      // })
      // contract.newCompany('company 1', 1, '0x004120f424F83417C68109Cc8522594c22528d3c').then(data => {
      //   console.log('contract data: ', data)
      // })
      contract.getContractStatus().then(data => {
        console.log('contract data: ', data.toString())
        var end = (new Date()).getTime()
        console.log(end - begin);
      })
      // contract.newContract([], [], 1519827609, 1716924800,
      // '0xF2f757BAE0F8681Da6315cED951b3ac566CB5ED7', '0xF54934698F6D4Daa0D6F8354A7599629DBAcb9EE',
      // Math.pow(10, 12)).then(data => {
      //   console.log('contract data: ', data)
      // })
    })

    // contract.newEmployee("_firstName", "_lastName", "_email", 1, '0x002c7E60484a0B65034C5D70b887Eee4A2C0FFbb', [], [], []).then(data => {
    //   console.log('contract data: ', data)
    // })
    // console.log(web3.utils.toWei('1', "ether"))

    // contract.getEmployee(0).then(data => {
    //   console.log('contract data: ', data)
    // })
    // console.log(window.contract)
  }

  render () {
    return (
      <p>hi</p>
    )
  }
}

function mapStateToProps (state) {
  return {

  }
}

export default connect(mapStateToProps, null)(Account)
