import React, { useRef } from 'react'
import { useEffectOnce } from 'react-use'
import cx from 'classnames'
import Cleave from 'cleave.js'
import 'cleave.js/dist/addons/cleave-phone.it'
import './Input.scss'
import PropTypes from 'prop-types'

const Input = ({ className, ...props }) => {
  const inputRef = useRef(null)

  useEffectOnce(() => {
    new Cleave(inputRef.current, {
      phone: true,
      phoneRegionCode: 'IT',
    })
  })

  return <input ref={inputRef} className={cx('Input', className)} {...props} />
}

Input.propTypes = {
  className: PropTypes.string,
}

export default Input
