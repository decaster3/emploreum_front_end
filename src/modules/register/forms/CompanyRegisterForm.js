import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'
import { register } from '../actions/register_actions'
import { renderField } from './Field'

class CompanyRegisterForm extends Component {
  render () {
    const { handleSubmit } = this.props
    return (
      <form onSubmit={handleSubmit(this.props.register)}>
        <h3>Company</h3>
        <Field name='name' type='text' component={renderField} label='Name' />
        <Field name='email' type='text' component={renderField} label='Email' />
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
  form: 'CompanyRegisterForm'
})(CompanyRegisterForm))

CompanyRegisterForm.propTypes = {
  user: PropTypes.object,
  handleSubmit: PropTypes.func,
  register: PropTypes.func
}
