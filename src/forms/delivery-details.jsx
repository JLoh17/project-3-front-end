import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { useFormik, Formik, Field, Form, FieldArray, ErrorMessage } from 'formik'
import { red } from '@mui/material/colors'

import * as yup from 'yup'

const redColor = red[500]

const validate = (values) => {
  const errors = {}
  if (!values.firstName) {
    errors.firstName = 'Required field'
  } else if (values.firstName.length > 15) {
    errors.firstName = 'Must be 15 characters or less'
  }

  if (!values.lastName) {
    errors.lastName = 'Required field'
  } else if (values.lastName.length > 20) {
    errors.lastName = 'Must be 20 characters or less'
  }

  if (!values.telephone) {
    errors.telephone = 'Required field'
  } else if (values.telephone.length > 8) {
    errors.telephone = 'Must be 8 numbers or less'
  }

  if (!values.address) {
    errors.address = 'Required field'
  } else if (values.address.length > 100) {
    errors.address = 'Must be 100 characters or less'
  }

  return errors
}

const DeliveryDetails = () => {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      telephone: '',
      address: '',
      defaultAddress: false
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    }
  })
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="firstName">First Name: </label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.firstName}
      />
      {formik.touched.firstName && formik.errors.firstName ? (
        <div className="text-danger">{formik.errors.firstName}</div>
      ) : null}

      <label htmlFor="lastName">Last Name: </label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.lastName}
      />
      {formik.touched.lastName && formik.errors.lastName ? (
        <div className="text-danger">{formik.errors.lastName}</div>
      ) : null}

      <label htmlFor="telephone">Telephone: </label>
      <input
        id="telephone"
        name="telephone"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.telephone}
      />
      {formik.touched.telephone && formik.errors.telephone ? (
        <div className="text-danger">{formik.errors.telephone}</div>
      ) : null}

      <label htmlFor="address">Address: </label>
      <input
        id="address"
        name="address"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.address}
      />
      {formik.touched.address && formik.errors.address ? (
        <div className="text-danger">{formik.errors.address}</div>
      ) : null}
      <label htmlFor="defaultAddress">Save as
        default address:</label>

      <input
        type="checkbox"
        name="defaultAddress"
        value="true"
        onChange={formik.handleChange}

      />

      <button type="submit">Submit</button>
    </form>
  )
}

export default DeliveryDetails
