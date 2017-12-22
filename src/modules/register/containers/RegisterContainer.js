import React, { Component } from 'react'
import CompanyRegisterForm from '../forms/CompanyRegisterForm'
import EmployeeRegisterForm from '../forms/EmployeeRegisterForm'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setRole } from '../actions/register_actions'
class RegisterContainer extends Component {
  render () {
    let p = this.props
    var registerConstants = require('../constants/register_constants.js')
    switch (p.user.role) {
      case registerConstants.COMPANY:
        return (
          <div>
            Metamask is on
            <CompanyRegisterForm />
            <button
              onClick={() => { p.setRole(registerConstants.NONE) }}>
               Back
            </button>
          </div>)
      case registerConstants.EMPLOYEE:
        return (
          <div>
            
            Metamask is on
            <EmployeeRegisterForm />
            <button
              onClick={() => { p.setRole(registerConstants.NONE) }}>
               Back
            </button>
          </div>)
      default:
        return (
          <div>
            Metamask is on. Who u are?
            <button
              onClick={() => { p.setRole(registerConstants.COMPANY) }}>
               Company
            </button>
            <button
              onClick={() => { p.setRole(registerConstants.EMPLOYEE) }}>
                Employee
            </button>
          </div>)
    }
  }
}

function mapStateToProps (state) {
  return {
    user: state.user
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ setRole }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer)
