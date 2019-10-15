import React, { useRef } from 'react'
import PropTypes from 'prop-types'

import Button from '../../components/Button'

import { Link } from 'react-router-dom'

import StepWizard from 'react-step-wizard'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'

import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'


const FirstStep = ({ values, touched, errors, handleBlur, handleChange, nextStep }) => {
  const fields = ['name']

  return (
    <Form>
      <Field
        label="Nome"
        id="name"
        type="text"
        value={values.name}
        variant="outlined"
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.name && touched.name}
        helperText={
          (touched.name && errors.name)}
      />


      <button
        onClick={nextStep}
        disabled={
          !Object.keys(touched).length ||
          fields.map(field => Object.keys(errors).includes(field)).some(field => field)
        }>
        Avanti
      </button>
    </Form>
  )
}

const ExampleForm = ({ history, location }) => {

  const container = useRef(null)

  return (
    <>
      <h1>
        Example Form
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
        }}
        // onSubmit={(values, actions) => {
        //   actions.setSubmitting(false)
        // }}
        validationSchema={Yup.object().shape({
          name: Yup.string().required()
        })}>
        {props => (
          <StepWizard
            onStepChange={() => {
              container.current.scrollTo({ top: 0 })
            }}>
            <FirstStep {...props} />
          </StepWizard>
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
