import React from 'react'
import PropTypes from 'prop-types'

import { Field } from 'formik'

import Cleave from 'cleave.js/react';
import 'cleave.js/dist/addons/cleave-phone.it'

const ThirdStep = ({ values, touched, errors, handleBlur, handleChange, nextStep, previousStep }) => {
  const fields = ['taxCode']

  return (
    <div id="third-step" className="input-wrapper">

      <div>
        <Field
          component={Cleave}
          options={{
            uppercase: true
          }}
          placeholder="Tax Code"
          id="taxCode"
          type="text"
          value={values.taxCode}
          onChange={handleChange}
          onBlur={handleBlur}
          maxLength={16}
        />
        {
          touched.taxCode && errors.taxCode && <p className="field-error">{errors.taxCode}</p>
        }
      </div>


      <div>
        <Field
          component={Cleave}
          options={{
            date: true,
          }}
          placeholder="Birth Date"
          id="birthDate"
          type="text"
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {
          touched.birthDate && errors.birthDate && <p className="field-error">{errors.birthDate}</p>
        }
      </div>

      <button
        className="prev-btn"
        onClick={previousStep}
      >
        Indietro
      </button>

      <button
        className="next-btn"
        onClick={nextStep}
        disabled={
          !Object.keys(touched).length ||
          fields.map(field => Object.keys(errors).includes(field)).some(field => field)
        }>
        Avanti
      </button>
    </div>
  )
}

ThirdStep.propTypes = {
  values: PropTypes.object.isRequired,
  touched: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  handleBlur: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  nextStep: PropTypes.func,
  previousStep: PropTypes.func
}

export default ThirdStep
