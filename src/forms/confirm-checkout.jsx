import React from 'react'
import PropTypes from 'prop-types'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as yup from 'yup'

const RenderForm = ({ errors, touched, isSubmitting }) => (

  <Form>
    <h4 className="text-center my-3">Delivery Address</h4>

    <div className="form-group">
      <label htmlFor="firstName">First Name</label>
      <Field
        id="firstName"
        className={`form-control ${(errors.firstName && touched.firstName ? ' is-invalid' : '')}`}
        name="firstName"
        type="text"
        disabled
      />
      <ErrorMessage component="div" className="invalid-feedback" name="firstName" />
    </div>

    <div className="form-group">
      <label htmlFor="lastName">Last Name</label>
      <Field
        id="lastName"
        className={`form-control ${(errors.lastName && touched.lastName ? ' is-invalid' : '')}`}
        name="lastName"
        type="text"
        disabled
      />
      <ErrorMessage component="div" className="invalid-feedback" name="lastName" />
    </div>

    <div className="form-group">
      <label htmlFor="telephone">Telephone</label>
      <Field
        id="telephone"
        className={`form-control ${(errors.telephone && touched.telephone ? ' is-invalid' : '')}`}
        name="telephone"
        type="text"
        disabled
      />
      <ErrorMessage component="div" className="invalid-feedback" name="telephone" />
    </div>

    <div className="form-group">
      <label htmlFor="deliveryAddress">Address</label>
      <Field
        id="deliveryAddress"
        className={`form-control ${(errors.deliveryAddress && touched.deliveryAddress ? ' is-invalid' : '')}`}
        name="deliveryAddress"
        type="text"
        disabled
      />
      <ErrorMessage component="div" className="invalid-feedback" name="deliveryAddress" />
    </div>

    <div className="text-center">
      <button className="btn btn-success col-6 ml-3" type="submit" disabled={isSubmitting}>Pay Now</button>
    </div>
  </Form>

)
RenderForm.propTypes = {
  errors: PropTypes.shape().isRequired,
  touched: PropTypes.shape().isRequired,
  isSubmitting: PropTypes.bool.isRequired
}

const confirmCheckoutSchema = yup.object().shape({
  firstName: yup.string().required('Field is Required'),
  lastName: yup.string().required('Field is Required'),
  telephone: yup.string().required('Field is Required'),
  deliveryAddress: yup.string().required('Field is Required'),
  saveAsDefaultAddress: yup.boolean()
})

const FormsConfirmCheckout = ({ initialValues, onSubmit }) => (
  <Formik
    initialValues={initialValues}
    validationSchema={confirmCheckoutSchema}
    onSubmit={onSubmit}
    component={RenderForm}
    enableReinitialize
  />
)
FormsConfirmCheckout.propTypes = {
  initialValues: PropTypes.shape().isRequired,
  onSubmit: PropTypes.func.isRequired
}

export default FormsConfirmCheckout
