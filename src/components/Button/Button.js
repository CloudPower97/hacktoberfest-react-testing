import React from 'react'
import PropTypes from 'prop-types'
// import cx from 'classnames'
import './Button.scss'

const Button = ({ children }) => <button className="Button">{children}</button>

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  icon: PropTypes.node,
}

export default Button
