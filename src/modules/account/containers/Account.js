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
    var web3 = contractLibrary.initWeb3()
    var contractInfo = require('../../contract_library/abi/Main.json')
    var address = '0x118E5B7539ceb7d6293388a51a6c3fAbfDD458b4'
    contractLibrary.readContractFromAddress(contractInfo, address).then(contract => {
      contract.send(web3.utils.toWei('1', 'ether')).then((data) => {
        console.log(data)
        console.log('sent')
      })
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
