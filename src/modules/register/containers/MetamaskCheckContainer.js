import React, { Component } from 'react'
import RegisterScene from '../../../scenes/register/RegisterScene'
import MetamaskOffScene from '../../../scenes/register/MetamaskOffScene'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { checkMetamask } from '../actions/register_actions'

class MetamaskCheckContainer extends Component {
  render () {
    let p = this.props
    switch (p.user.metamaskStatus.status) {
      case true:
        return (
          <RegisterScene />
        )
      case false:
        return (
          <MetamaskOffScene />
        )
      default:
        return (
          <div>
            Loading...
          </div>
        )
    }
  }
}

function mapStateToProps (state) {
  return {
    user: state.user
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(
    {
      checkMetamask: checkMetamask
    },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(MetamaskCheckContainer)
