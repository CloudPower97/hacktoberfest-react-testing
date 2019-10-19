import React from 'react'
import PropTypes from 'prop-types'

import { Field } from 'formik'

import Cleave from 'cleave.js/react';
import 'cleave.js/dist/addons/cleave-phone.it'

const SecondStep = ({ values, touched, errors, handleBlur, handleChange, nextStep, previousStep }) => {
  // * Make the test fails by not adding 'email' in the fields array
  const fields = []

  return (
    <div id="second-step" className="input-wrapper">

      <div>
        <Field
          placeholder="Email"
          id="email"
          type="text"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {
          touched.email && errors.email && <p className="field-error">{errors.email}</p>
        }
      </div>

      <div>
        <Field
          component={Cleave}
          options={{
            phone: true,
            phoneRegionCode: 'IT',
          }}
          placeholder="Phone Number"
          id="phoneNumber"
          type="text"
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {
          touched.phoneNumber && errors.phoneNumber && <p className="field-error">{errors.phoneNumber}</p>
        }
      </div>

      <button
        className="prev-btn"
        onClick={previousStep}
      >
        Back
      </button>

      <button
        className="next-btn"
        onClick={nextStep}
        disabled={
          !Object.keys(touched).length ||
          fields.map(field => Object.keys(errors).includes(field)).some(field => field)
        }>
        Next
      </button>
    </div>
  )
}

SecondStep.propTypes = {
  values: PropTypes.object.isRequired,
  touched: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  handleBlur: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  nextStep: PropTypes.func,
  previousStep: PropTypes.func
}

export default SecondStep
