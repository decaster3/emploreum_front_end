import React from 'react'
import PropTypes from 'prop-types'

export const renderField = ({ input, label, type }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
    </div>
  </div>
)

renderField.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string,
  type: PropTypes.string
}
