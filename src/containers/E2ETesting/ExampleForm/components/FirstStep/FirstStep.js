import React from 'react'
import PropTypes from 'prop-types'

import { Field } from 'formik'

const FirstStep = ({ values, touched, errors, handleBlur, handleChange, nextStep }) => {
  const fields = ['name', 'surname']

  return (
    <div id="first-step" className="input-wrapper">
      <div>
        <Field
          placeholder="Name"
          id="name"
          type="text"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          autoComplete="off"
        />
        {
          touched.name && errors.name && <p className="field-error">{errors.name}</p>
        }
      </div>

      <div>
        <Field
          placeholder="Surname"
          id="surname"
          type="text"
          value={values.surname}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {
          touched.surname && errors.surname && <p className="field-error">{errors.surname}</p>
        }
      </div>

      <button
        className="next-btn"
        onClick={nextStep}
        disabled={
          !Object.keys(touched).length ||
          fields.map(field => Object.keys(errors).includes(field)).some(field => field)
        }
        style={{
          gridColumnStart: 2
        }}>
        Next
      </button>
    </div>
  )
}

FirstStep.propTypes = {
  values: PropTypes.object.isRequired,
  touched: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  handleBlur: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  nextStep: PropTypes.func,
  previousStep: PropTypes.func
}

export default FirstStep
