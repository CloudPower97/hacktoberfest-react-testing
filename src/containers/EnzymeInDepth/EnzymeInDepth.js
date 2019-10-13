import React from 'react'
import { Switch, Route, Redirect, Link } from 'react-router-dom'
import Tools from '../../assets/emoji/tools.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Shallow = ({ history }) => (
  <>
    <h1>
      Shallow Rendering
      <img src={Tools} alt="Tools" />
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
      to="mount"
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
      <ul>
        <li>
          <strong>Shallow.</strong> Real unit test (isolation, no children render)
          <ul>
            <li>Simple shallow calls:</li>
            <ul>
              <li>constructor</li>
              <li>render</li>
            </ul>

            <li>Shallow + setProps calls:</li>
            <ul>
              <li>componentWillReceiveProps</li>
              <li>shouldComponentUpdate</li>
              <li>componentWillUpdate</li>
              <li>render</li>
            </ul>

            <li>Shallow + unmount calls:</li>
            <ul>
              <li>componentWillUnmount</li>
            </ul>
          </ul>
        </li>
      </ul>
    </div>
  </>
)

const Mount = ({ history }) => (
  <>
    <h1>
      Full Rendering <img src={Tools} alt="Tools" />
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
      to="render"
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
      <ul>
        <li>
          <strong>Mount.</strong> The only way to test componentDidMount and componentDidUpdate.
          Full rendering including child components. Requires a DOM (jsdom, domino). More constly in
          execution time.
          <ul>
            <li>Simple mount calls:</li>
            <ul>
              <li>constructor</li>
              <li>render</li>
              <li>componentDidMount</li>
            </ul>

            <li>Mount + setProps:</li>
            <ul>
              <li>componentWillReceiveProps</li>
              <li>shouldComponentUpdate</li>
              <li>componentWillUpdate</li>
              <li>render</li>
              <li>componentDidUpdate</li>
            </ul>

            <li>Mount + unmount calls:</li>
            <ul>
              <li>componentWillUnmount</li>
            </ul>
          </ul>
        </li>
      </ul>
    </div>
  </>
)

const Render = ({ history }) => (
  <>
    <h1>
      Static Rendering <img src={Tools} alt="Tools" />
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
      to="what-you-will-learn"
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
      <ul>
        <li>
          <strong>Render.</strong> Only calls render but renders all children.
        </li>
      </ul>
    </div>
  </>
)

export default ({ match: { path } }) => (
  <Switch>
    <Route path={`${path}/shallow`} component={Shallow} />
    <Route path={`${path}/mount`} component={Mount} />
    <Route path={`${path}/render`} component={Render} />
    <Redirect to={`${path}/shallow`} />
  </Switch>
)
