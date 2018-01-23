import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as contractLibrary from '../../contract_library'

class Account extends Component {
  componentDidMount () {
    // console.log(contractLibrary)
    var web3 = contractLibrary.initWeb3()
    var contractInfo = require('../../../blockchain/JCR.json')
    var address = '0xacfaf348e04867a2385a2b2a5d850b347daedd34'
    var contract = contractLibrary.readContractFromAddress(web3, contractInfo, address)
    contract.showOwner().then(data => {
      console.log('contract data: ', data)
    })
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
