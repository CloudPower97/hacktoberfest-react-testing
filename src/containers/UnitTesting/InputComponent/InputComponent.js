import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'

import WomanWorker from '../../../assets/emoji/woman-worker.png'

import Input from '../../../components/Input/Input'

const InputComponent = ({ history }) => (
  <>
    <h1
    >
      Let&apos;s test this input! <img src={WomanWorker} alt="Nerd" />
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
      to="/greetings"
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
        It seems that there are a couple of test failing for this component... Let&apos;s get our hands
        dirty fixing this component right now!
      </p>
    </div>

    <form>
      <label
        style={{
          display: 'inline-flex',
          alignItems: 'center',
        }}>
        Date:
        <Input value={new Date().toLocaleDateString()} type="text" />
      </label>
    </form>
  </>
)

InputComponent.propTypes = {

}

export default InputComponent
