import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'

import Button from '../../../components/Button/Button'

import ManWorker from '../../../assets/emoji/man-worker.png'

const ButtonComponent = ({ history }) => (
  <>
    <h1>
      Let&apos;s test this button! <img src={ManWorker} alt="Nerd" />
    </h1>

    <button
      onClick={history.goBack}
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
      }}>
      <FontAwesomeIcon icon={faArrowLeft} /> Go Back
    </button>

    <Link
      to="input"
      style={{
        position: 'absolute',
        right: 0,
        top: 0,
      }}>
      Next! <FontAwesomeIcon icon={faArrowRight} />
    </Link>

    <div
      style={{
        padding: 25,
      }}>
      <p>
        It seems that there are a couple of test failing for this component... Let's get our hands
        dirty fixing this component right now!
      </p>
    </div>

    <div className="btn-wrapper">
      <Button
        onClick={() => alert("Yay! It's working")}
        className="big"
        style={{
          columnSpan: 'all',
          gridColumnEnd: 3,
          gridColumnStart: 1,
        }}
        icon={<FontAwesomeIcon icon={faArrowRight} />}>
        Unit Test are important!
      </Button>
    </div>
  </>
)

ButtonComponent.propTypes = {

}

export default ButtonComponent
