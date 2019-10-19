import React, { useRef } from 'react'
import { useEffectOnce } from 'react-use'
import cx from 'classnames'
import Cleave from 'cleave.js'
import './Input.scss'
import PropTypes from 'prop-types'

const Input = ({ className, ...props }) => {
  const inputRef = useRef(null)

  useEffectOnce(() => {
    const cleaveInstace = new Cleave(inputRef.current, {
      date: true,
    })

    return () => {
      if (cleaveInstace) {
        cleaveInstace.destroy()
      }
    }
  })

  return <input ref={inputRef} className={cx('Input', className)} {...props} />
}

Input.propTypes = {
  className: PropTypes.string,
}

export default Input
