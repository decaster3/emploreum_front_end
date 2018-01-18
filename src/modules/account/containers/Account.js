import React, { Component } from 'react'
import { connect } from 'react-redux'

class Account extends Component {
  componentDidMount () {
    window.contract.showOwner().then(data => {
      console.log('contract data: ', data)
    })
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
