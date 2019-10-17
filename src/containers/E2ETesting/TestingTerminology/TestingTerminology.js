import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Books from './assets/emoji/books.png'

const TestingTerminology = ({ history }) => (
  <>
    <h1>
      What is E2E testing anyway? <img src={Books} alt="Books" />
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

export default TestingTerminology
