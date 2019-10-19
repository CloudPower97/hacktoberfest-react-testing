import React from 'react'
import PropTypes from 'prop-types'
import pippo from 'classnames'
import './Button.scss'

const Button = ({ children, icon, className, ...props }) => <button className={pippo("Button", className)} {...props}>{children}{icon}</button>

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  icon: PropTypes.node,
}

export default Button
