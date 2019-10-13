import React from 'react'
import logo from './assets/img/logo.svg'
import { Switch, Route, Redirect, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Tools from './assets/emoji/tools.png'
import Nerd from './assets/emoji/nerd.png'
import Books from './assets/emoji/books.png'
import Jest from './assets/img/jest.png'
import AirBnb from './assets/img/airbnb.png'
import Input from './components/Input'
import Button from './components/Button'

const InputComponent = ({ history }) => (
  <>
    <h1
      style={{
        fontFamily: "'Inconsolata', monospace",
      }}>
      Let's test this input! <img src={Nerd} alt="Nerd" />
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
      to="recap"
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

    <form>
      <label
        style={{
          display: 'inline-flex',
          alignItems: 'center',
        }}>
        Phone Number:
        <Input value="0811234567" type="text" />
      </label>
    </form>
  </>
)

const ButtonComponent = ({ history }) => (
  <>
    <h1
      style={{
        fontFamily: "'Inconsolata', monospace",
      }}>
      Let's test this button! <img src={Nerd} alt="Nerd" />
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
      to="input-component"
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
        }}>
        Unit Test are important!
      </Button>
    </div>
  </>
)

const WhatYouWillLearn = ({ history }) => (
  <>
    <h1
      style={{
        fontFamily: "'Inconsolata', monospace",
      }}>
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
      to="button-component"
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
        After this workshop you will have a good knowledge of Unit Testing concepts and how to start
        using them effectively.
      </p>
    </div>

    <div className="btn-wrapper">
      <Link
        to="/boring-class-component"
        style={{
          columnSpan: 'all',
          gridColumnEnd: 3,
          gridColumnStart: 1,
        }}>
        Without any further do, let's start coding together!
      </Link>
    </div>
  </>
)

const UsedTools = ({ history }) => (
  <>
    <h1
      style={{
        fontFamily: "'Inconsolata', monospace",
      }}>
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
      to="/enzyme-in-depth/shallow"
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
      <p>To accomplish our goal we will be using Jest and Enzyme.</p>

      <div
        style={{
          textAlign: 'left',
        }}>
        <img src={Jest} alt="Jest logo" height={100} />
        <p>Jest is a delightful JavaScript Testing Framework with a focus on simplicity.</p>
      </div>

      <div
        style={{
          textAlign: 'right',
        }}>
        <img
          src={AirBnb}
          alt="AirBnb logo"
          height={100}
          style={{
            textAlign: 'right',
          }}
        />
        <p>
          Enzyme is a JavaScript Testing utility for React that makes it easier to test your React
          Components' output. You can also manipulate, traverse, and in some ways simulate runtime
          given the output. Enzyme's API is meant to be intuitive and flexible by mimicking jQuery's
          API for DOM manipulation and traversal.
        </p>
      </div>
    </div>
  </>
)

const TestingTerminology = ({ history }) => (
  <>
    <h1
      style={{
        fontFamily: "'Inconsolata', monospace",
      }}>
      Testing Terminology <img src={Books} alt="Books" />
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
      <ul
        style={{
          listStyleType: 'disc',
        }}>
        <li>
          <p>
            <strong>Smoke testing.</strong> Verifies that a component renders without throwing.
            Utilising Enzyme’s <code>shallow()</code> is indeed a smoke test, as is{' '}
            <code>mount()</code>.
          </p>
        </li>

        <li>
          <p>
            <strong>Snapshot testing</strong> A snapshot test is essentially what the name implies.
            We render a component and then take a snapshot of what it look like. Then, every time
            you run your test suite, we compare the old snapshot to a new one. If the snapshots do
            not match, then we know that something has changed and we will see the parts that do not
            match highlighted.
          </p>
        </li>

        <li>
          <p>
            <strong>Shallow rendering.</strong> Rendering a component with no children. Enzyme’s{' '}
            <code>shallow()</code> is a form of shallow rendering, whereas <code>mount()</code> is
            not.
          </p>
        </li>

        <li>
          <p>
            <strong>Full rendering.</strong> Rendering a component and all of its children.{' '}
            <code>mount()</code> is a full rendering method whereas <code>shallow()</code> is not.
          </p>
        </li>

        <li>
          <p>
            <strong>Static rendering.</strong> Rendering components to static HTML files and then
            analysing the results. Enzyme’s <code>render()</code> method is used for static
            rendering.
          </p>
        </li>

        <li>
          <p>
            <strong>And many more ...</strong>
          </p>
        </li>
      </ul>
    </div>
  </>
)

const App = ({ match: { path } }) => (
  <>
    <img src={logo} alt="logo" />

    <h1
      style={{
        fontFamily: "'Inconsolata', monospace",
        fontSize: '1.5em',
      }}>
      Test your code, not your patience Part I: Unit Testing with Jest and Enzyme
    </h1>

    <div className="btn-wrapper">
      <Link
        to={`${path}/testing-terminology`}
        style={{
          columnSpan: 'all',
          gridColumnEnd: 3,
          gridColumnStart: 1,
        }}>
        Let's Start Hacking!
      </Link>
    </div>
  </>
)

export default ({ match: { path } }) => (
  <Switch>
    <Route exact path={path} component={App} />
    <Route exact path={`${path}/testing-terminology`} component={TestingTerminology} />
    <Route exact path={`${path}/used-tools`} component={UsedTools} />
    <Route exact path={`${path}/what-you-will-learn`} component={WhatYouWillLearn} />
    <Route exact path={`${path}/button-component`} component={ButtonComponent} />
    <Route exact path={`${path}/input-component`} component={InputComponent} />
    <Redirect to={path} />
  </Switch>
)
