import React from 'react'
import PropTypes from 'prop-types'
import { Formik, Field, Form, FieldArray, ErrorMessage } from 'formik'
import * as yup from 'yup'

// const RenderTodoItems = ({ form: { values, errors, touched }, remove, push }) => (
//   <ul className="list-group mb-3">
//     {
//       values.TodoItems.length > 0 && values.TodoItems.map((item, index) => {
//         const key = `item-${index}`
//         const itemErrors = (errors.TodoItems && errors.TodoItems[index]) || {}
//         const itemTouched = (touched.TodoItems && touched.TodoItems[index]) || {}

//         return (
//           <li className="list-group-item" key={key}>
//             <div className="position-relative">
//               <h6 className="text-center">Item {index + 1}</h6>

//               <div className="form-group">
//                 <label htmlFor={`TodoItems.${index}.name`}>Name</label>
//                 <Field
//                   id={`TodoItems.${index}.name`}
//                   className={`form-control ${(itemErrors.name && itemTouched.name ? ' is-invalid' : '')}`}
//                   name={`TodoItems.${index}.name`}
//                   type="text"
//                 />
//                 <ErrorMessage component="div" className="invalid-feedback" name={`TodoItems.${index}.name`} />
//               </div>

//               <div className="form-group custom-control custom-checkbox">
//                 <Field
//                   id={`TodoItems.${index}.checked`}
//                   className="custom-control-input"
//                   name={`TodoItems.${index}.checked`}
//                   type="checkbox"
//                 />
//                 <label className="custom-control-label" htmlFor={`TodoItems.${index}.checked`}>Completed</label>
//                 <ErrorMessage component="div" className="invalid-feedback" name={`TodoItems.${index}.checked`} />
//               </div>

//               <button type="button" className="btn btn-danger btn-sm position-absolute" style={{ top: 0, right: 0 }} onClick={() => remove(index)}>X</button>
//             </div>
//           </li>
//         )
//       })
//     }
//     <button type="button" className="btn btn-primary" onClick={() => push({ name: '', checked: false })}>Add Item</button>
//   </ul>
// )
// RenderTodoItems.propTypes = {
//   form: PropTypes.shape({
//     values: PropTypes.shape().isRequired,
//     errors: PropTypes.shape().isRequired,
//     touched: PropTypes.shape().isRequired
//   }).isRequired,
//   remove: PropTypes.func.isRequired,
//   push: PropTypes.func.isRequired
// }

const RenderForm = ({ errors, touched, isSubmitting }) => (
  <Form>
    <div className="form-group col-8">
      <label htmlFor="firstName">First Name</label>
      <Field
        id="firstName"
        className={`form-control ${(errors.firstName && touched.firstName ? ' is-invalid' : '')}`}
        name="firstName"
        type="text"
      />
      <ErrorMessage component="div" className="invalid-feedback" name="firstName" />
    </div>
    <div className="col-8">
      <label htmlFor="lastName">Last Name</label>
      <Field
        id="lastName"
        className={`form-control ${(errors.lastName && touched.lastName ? ' is-invalid' : '')}`}
        name="lastName"
        type="text"
      />
      <ErrorMessage component="div" className="invalid-feedback" name="lastName" />
    </div>
    <div className="col-8">
      <label htmlFor="telephone">Telephone</label>
      <Field
        id="telephone"
        className={`form-control ${(errors.telephone && touched.telephone ? ' is-invalid' : '')}`}
        name="telephone"
        type="text"
      />
      <ErrorMessage component="div" className="invalid-feedback" name="telephone" />
    </div>
    <div className="col-8">
      <label htmlFor="address">Address</label>
      <Field
        id="address"
        className={`form-control ${(errors.address && touched.address ? ' is-invalid' : '')}`}
        name="address"
        type="text"
      />
      <ErrorMessage component="div" className="invalid-feedback" name="address" />
    </div>
    <div className="custom-control custom-checkbox col-8 ml-3 my-2">
      <Field
        id="saveAsDefaultAddress"
        className="custom-control-input"
        name="saveAsDefaultAddress"
        type="checkbox"
      />
      <label className="custom-control-label" htmlFor="saveAsDefaultAddress">Save as default address</label>
      <ErrorMessage component="div" className="invalid-feedback" name="saveAsDefaultAddress" />
    </div>
    {/* <FieldArray name="TodoItems" component={RenderTodoItems} /> */}

    <button className="btn btn-success col-6 ml-3" type="submit" disabled={isSubmitting}>Confirm Checkout</button>
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
