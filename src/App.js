import React from 'react'
import logo from './assets/img/logo.svg'
import { Switch, Route, Redirect, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Tools from './assets/emoji/tools.png'
import Books from './assets/emoji/books.png'
import Jest from './assets/img/jest.png'
import AirBnb from './assets/img/airbnb.png'

import { Light as SyntaxHighlighter } from 'react-syntax-highlighter'
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript'
import vs from 'react-syntax-highlighter/dist/esm/styles/hljs/vs2015'
import me from './assets/img/me.jpeg'

SyntaxHighlighter.registerLanguage('javascript', js)


const UsedTools = ({ history }) => (
  <>
    <h1
    >
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
      to="/enzyme-in-depth"
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
    <h1>
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
          <strong>Smoke testing.</strong> Verifies that a component renders without throwing.
            Utilising Enzyme’s <code>shallow()</code> is indeed a smoke test, as is{' '}
          <code>mount()</code>.
        </li>

        <li>
          <strong>Snapshot testing</strong> A snapshot test is essentially what the name implies.
          We render a component and then take a snapshot of what it look like. Then, every time
          you run your test suite, we compare the old snapshot to a new one. If the snapshots do
          not match, then we know that something has changed and we will see the parts that do not
          match highlighted.
        </li>

        <li>
          <strong>Shallow rendering.</strong> Rendering a component with no children. Enzyme’s{' '}
          <code>shallow()</code> is a form of shallow rendering, whereas <code>mount()</code> is
          not.
        </li>

        <li>
          <strong>Full rendering.</strong> Rendering a component and all of its children.{' '}
          <code>mount()</code> is a full rendering method whereas <code>shallow()</code> is not.
        </li>

        <li>
          <strong>Static rendering.</strong> Rendering components to static HTML files and then
            analysing the results. Enzyme’s <code>render()</code> method is used for static
        rendering.
        </li>

        <li>
          <strong>And many more ...</strong>
        </li>
      </ul>
    </div>
  </>
)

const WhoAmI = ({ history }) => (
  <>
    <h1>
      Who am I? <span role="img" aria-label="Men Coding">👨‍💻</span>
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
      to="testing-terminology"
      style={{
        position: 'absolute',
        right: 0,
        top: 0,
      }}>
      Next! <FontAwesomeIcon icon={faArrowRight} />
    </Link>

    <div
      style={{
        padding: 90,
        overflowY: 'auto',
        height: '55%',
      }}>
      <div style={{
        position: 'relative'
      }}>
        <img src={me} alt="Claudio Cortese, Full Stack Developer@Abstract Technology" style={{
          position: 'absolute',
          borderRadius: '50%',
          right: -30,
          top: -90,
          zIndex: 1,
        }} />

        <SyntaxHighlighter language="javascript" style={vs}>
          {`{
  "name": "Claudio",
  "surname": "Cortese",
  "legs": 2,
  "nickname": "CloudPower97",
  "age": ${new Date().getFullYear() - new Date('01/18/1997').getFullYear()},
  "email": "claudio.cortese@abstract-technology.com",
  "job": "Full Stack Developer@Abstract Technology",
  "enemies": ['Java 💩 (and my girlfirend as a consequence 🤦‍♂️)', 'bugs 🐞'],
  "favouriteFood": "Whopper 🍔(If you enjoy my workshop you can offer me one at the nearest BK)",
  "music": [
    'Michael JSON',
    'Foo Bar Fighters',
    'Depeche Code',
    'Nicky MinAJAX',
    'Kanye Test',
    'Queens of the NODE Age',
  ],
}`}
        </SyntaxHighlighter>
      </div>

    </div>
  </>
)

const App = ({ match: { path } }) => (
  <>
    <img src={logo} alt="logo" />

    <h1
      style={{
        fontSize: '1.5em',
      }}>
      Test your code, not your patience Part I: Unit Testing with Jest and Enzyme
    </h1>

    <div className="btn-wrapper">
      <Link
        to={`${path}/who-am-i`}
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
    <Route path={`${path}/who-am-i`} component={WhoAmI} />
    <Route exact path={`${path}/testing-terminology`} component={TestingTerminology} />
    <Route exact path={`${path}/used-tools`} component={UsedTools} />
    <Redirect to={path} />
  </Switch>
)
