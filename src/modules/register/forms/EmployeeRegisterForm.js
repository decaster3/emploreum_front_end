import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'
import { register } from '../actions/register_actions'
import { renderField } from './Field'
import normalizePassport from './normalizing/passport_narmolizing'

class EmployeeRegisterForm extends Component {
  render () {
    const { handleSubmit } = this.props
    return (
      <form onSubmit={handleSubmit(this.props.register)}>
        <h3>Employee</h3>
        <Field name='firstName' type='text' component={renderField} label='First name' />
        <Field name='lastName' type='text' component={renderField} label='Last name' />
        <Field name='passport' type='text' component={renderField} label='Pasport' normalize={normalizePassport} />
        {this.props.user.metamaskStatus.address}
        <button type='submit'>Submit</button>
      </form>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({register}, dispatch)
}

function mapStateToProps (state) {
  return {
    user: state.user
  }
}

export default
connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: 'EmployeeRegisterForm'
})(EmployeeRegisterForm))

EmployeeRegisterForm.propTypes = {
  user: PropTypes.object,
  handleSubmit: PropTypes.func,
  register: PropTypes.func
}
