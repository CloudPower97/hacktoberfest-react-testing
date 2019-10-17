import React from 'react'
import PropTypes from 'prop-types'

import Nerd from '../../assets/emoji/nerd.png'

import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'

const WhatYouWillLearn = ({ history }) => (
  <>
    <h1
    >
      What you will learn <img src={Nerd} alt="Nerd" />
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
      to="/unit-testing"
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
        overflowY: 'auto',
      }}>
      <p>
        After this workshop you will have a good knowledge of Unit Testing concepts and how to start
        using them effectively.
      </p>
    </div>

    <div className="btn-wrapper">
      <Link
        to="/unit-testing"
        style={{
          columnSpan: 'all',
          gridColumnEnd: 3,
          gridColumnStart: 1,
        }}>
        Without any further do, let&apos;s start coding together!
      </Link>
    </div>
  </>
)

WhatYouWillLearn.propTypes = {

}

export default WhatYouWillLearn
