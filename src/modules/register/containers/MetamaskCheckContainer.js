import React, { Component } from 'react'
import RegisterContainer from './RegisterContainer'
import MetamaskOffScene from '../scenes/MetamaskOffScene'
import { connect } from 'react-redux'

class MetamaskCheckContainer extends Component {
  render () {
    let p = this.props
    switch (p.user.metamaskStatus.status) {
      case true:
        if (p.user.metamaskStatus.address) {
          return (
            <RegisterContainer />
          )
        } else {
          return (
            <MetamaskOffScene address={false} />
          )
        }
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

export default connect(mapStateToProps, null)(MetamaskCheckContainer)
