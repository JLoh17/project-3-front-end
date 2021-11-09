import React from 'react'
import PropTypes from 'prop-types'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as yup from 'yup'

// const initialValues = {
//   firstName: '',
//   lastName: '',
//   telephone: '',
//   address: ''

// }

const RenderForm = ({ errors, touched, isSubmitting }) => (

  <Form>
    <h4 className="text-center my-3">Delivery Address Information</h4>

    <div className="form-group">
      <label htmlFor="firstName">First Name</label>
      <Field
        id="firstName"
        className={`form-control ${(errors.firstName && touched.firstName ? ' is-invalid' : '')}`}
        name="firstName"
        type="text"
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
      />
      <ErrorMessage component="div" className="invalid-feedback" name="telephone" />
    </div>

    <div className="form-group">
      <label htmlFor="address">Address</label>
      <Field
        id="address"
        className={`form-control ${(errors.address && touched.address ? ' is-invalid' : '')}`}
        name="address"
        type="text"
        // component="textarea"
        // rows="4"
        // value=""
      />
      <ErrorMessage component="div" className="invalid-feedback" name="address" />
    </div>

    <div className="custom-control custom-checkbox form-group">
      <Field
        id="saveAsDefaultAddress"
        className="custom-control-input"
        name="saveAsDefaultAddress"
        type="checkbox"
      />
      <label className="custom-control-label" htmlFor="saveAsDefaultAddress">Save as default address</label>
      <ErrorMessage component="div" className="invalid-feedback" name="saveAsDefaultAddress" />
    </div>

    <div className="text-center">
      <button className="btn btn-success col-6 ml-3" type="submit" disabled={isSubmitting}>Confirm Checkout</button>
    </div>
  </Form>
)
RenderForm.propTypes = {
  errors: PropTypes.shape().isRequired,
  touched: PropTypes.shape().isRequired,
  isSubmitting: PropTypes.bool.isRequired
}

const deliveryDetailsSchema = yup.object().shape({
  firstName: yup.string().required('Field is Required'),
  lastName: yup.string().required('Field is Required'),
  telephone: yup.number().required('Field is Required'),
  address: yup.string().required('Field is Required'),
  saveAsDefaultAddress: yup.boolean()
})

const FormsDeliveryDetails = ({ initialValues, onSubmit }) => (
  <Formik
    initialValues={initialValues}
    validationSchema={deliveryDetailsSchema}
    onSubmit={onSubmit}
    component={RenderForm}
  />
)
FormsDeliveryDetails.propTypes = {
  initialValues: PropTypes.shape().isRequired,
  onSubmit: PropTypes.func.isRequired
}

export default FormsDeliveryDetails
