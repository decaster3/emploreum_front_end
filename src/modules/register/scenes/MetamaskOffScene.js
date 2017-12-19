import React, { Component } from 'react'
import PropTypes from 'prop-types'

class MetamaskCheckScene extends Component {
  render () {
    return (
      <div>
        { this.props.address ?
          <h1>Metamask is off</h1>
          :
          <h1>Metamask is on, but u need to log in bro</h1>
        }
      </div>
    )
  }
}
MetamaskCheckScene.propTypes = {
  address: PropTypes.boolean
}

export default MetamaskCheckScene
