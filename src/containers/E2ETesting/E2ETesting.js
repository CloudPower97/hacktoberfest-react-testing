import React from 'react'
import PropTypes from 'prop-types'

import { Switch, Route, Redirect, Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'

import logo from '../../assets/img/logo.svg'
import Tools from '../../assets/emoji/tools.png'
import CypressLogo from '../../assets/img/cypress.png'
import Thinking from '../../assets/emoji/thinking.png'

import ExampleForm from './ExampleForm'

const UsedTools = ({ history, match: { path } }) => (
  <>
    <h1>
      Used Tools <img src={Tools} alt="Tools" />
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
      to="example-form"
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
        height: '55%',
        textAlign: 'center',
      }}>
      <p>To accomplish our goal we will be using Cypress.</p>

      <div>
        <img src={CypressLogo} alt="Cypress logo" height={100} />
        <p style={{
          textAlign: 'left'
        }}>Cypress is a next generation front end testing tool built for the modern web.</p>
        <p>It address the key pain points developers and QA engineers face when testing modern applications.</p>
      </div>

    </div>
  </>
)

const WhatIsE2E = ({ history }) => (
  <>
    <h1>
      What is E2E testing anyway? <img src={Thinking} alt="Books" />
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
      to="used-tools"
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
        height: '55%',
      }}>
      <p>
        End-to-end testing is a methodology used to test whether the flow of an application is performing as designed from start to finish.
        The purpose of carrying out end-to-end tests is to identify system dependencies and to ensure that the right information is passed between various system components and systems.
      </p>

      <p>
        For example, a simplified end-to-end testing of an email application might involve:
      </p>

      <ul>
        <li>
          Logging in to the application
        </li>

        <li>
          Accessing the inbox
        </li>

        <li>
          Opening and closing the mailbox
        </li>

        <li>
          Composing, forwarding or replying to email
        </li>

        <li>
          Checking the sent items
        </li>

        <li>
          Logging out of the application
        </li>
      </ul>
    </div>
  </>
)

const Intro = ({ history, match: { path } }) => (
  <>
    <Link
      to="/greetings"
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
      }}>
      <FontAwesomeIcon icon={faArrowLeft} /> Go Back
    </Link>

    <Link
      to={`${path}/what-is-e2e`}
      style={{
        position: 'absolute',
        right: 0,
        top: 0,
      }}>
      Next! <FontAwesomeIcon icon={faArrowRight} />
    </Link>

    <img src={logo} alt="logo" />

    <h1
      style={{
        fontSize: '1.5em',
      }}>
      Test your code, not your patience Part II: Functional Testing with Cypress
    </h1>

    <div className="btn-wrapper">
      <Link
        to={`${path}/what-is-e2e`}
        style={{
          columnSpan: 'all',
          gridColumnEnd: 3,
          gridColumnStart: 1,
        }}>
        Let&apos;s Start Hacking!
      </Link>
    </div>
  </>
)


const E2ETesting = ({ match: { path } }) => (
  <Switch>
    <Route exact path={path} component={Intro} />
    <Route exact path={`${path}/what-is-e2e`} component={WhatIsE2E} />
    <Route exact path={`${path}/used-tools`} component={UsedTools} />
    <Route exact path={`${path}/example-form`} component={ExampleForm} />
    <Redirect to={path} />
  </Switch>
)

E2ETesting.propTypes = {
  match: PropTypes.object.isRequired
}

export default E2ETesting
