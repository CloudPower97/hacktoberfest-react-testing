import React from 'react'
import PropTypes from 'prop-types'

import "./ExampleForm.scss"

import { Link } from 'react-router-dom'

import StepWizard from 'react-step-wizard'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'

import { Formik } from 'formik'
import * as Yup from 'yup'

import MenWorking from '../../../assets/emoji/man-worker.png'

import { FirstStep, SecondStep, ThirdStep } from './components'

const ExampleForm = ({ history }) => {

  return (
    <>
      <h1>
        Let&apos;s run an E2E test on this form! <img src={MenWorking} alt="Men Working" />
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

      <Formik
        initialValues={{
          name: undefined,
          surname: undefined,
          email: '',
          phoneNumber: undefined,
          taxCode: undefined,
          birthDate: undefined
        }}
        // onSubmit={(values, actions) => {
        //   actions.setSubmitting(false)
        // }}
        validationSchema={Yup.object().shape({
          name: Yup.string().required(),
          surname: Yup.string().required(),
          email: Yup.string().email().required(),
          phoneNumber: Yup.string(),
          taxCode: Yup.string().length(16).matches(
            /^[a-zA-Z]{6}[0-9]{2}[abcdehlmprstABCDEHLMPRST]{1}[0-9]{2}([a-zA-Z]{1}[0-9]{3})[a-zA-Z]{1}$/
          ).required(),
          birthDate: Yup.string()
        })}>
        {props => (
          <div id="example-form">
            <StepWizard>
              <FirstStep {...props} />
              <SecondStep {...props} />
              <ThirdStep {...props} />
            </StepWizard>
          </div>
        )}
      </Formik>
    </>
  )
}

ExampleForm.propTypes = {
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
}

export default ExampleForm
