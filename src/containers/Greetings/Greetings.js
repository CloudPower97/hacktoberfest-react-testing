import React from 'react'
import { Switch, Route, Link, Redirect } from 'react-router-dom'
import WavingHand from '../../assets/emoji/waving-hand.png'
import Wink from '../../assets/emoji/wink.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowLeft,
  faArrowRight
} from '@fortawesome/free-solid-svg-icons'

const Greetings = ({ history }) => (
  <div
    className="boring-class-component-wrapper"
    style={{
      justifyContent: 'center',
    }}>
    <h1
      style={{
        display: 'inline-flex',
        alignContent: 'center',
      }}>
      See you later!
      <img
        src={WavingHand}
        alt=""
        style={{
          height: 40,
        }}
      />
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
      to="/e2e-testing"
      style={{
        position: 'absolute',
        right: 0,
        top: 0,
      }}>
      Next! <FontAwesomeIcon icon={faArrowRight} />
    </Link>

    <p
      style={{
        fontSize: 'x-large',
      }}>
      Hopefully I explained my self well!
    </p>

    <p>
      Now it&apos;s your time, you should be now ready to write Unit Test for your components!
      <img src={Wink} alt="" />
    </p>
  </div>
)

export default ({ location: { pathname } }) => (
  <Switch>
    <Route path={pathname} component={Greetings} />
    <Redirect to={pathname} />
  </Switch>
)
