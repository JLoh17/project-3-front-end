import React from 'react'
// import { Link } from 'react-router-dom'
import { Formik, Form, Field } from 'formik'
import * as yup from 'yup'

const profileSchema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Required'),
  password: yup.string().min(8, 'Password is too short!').required('Required'),
  newPassword: yup.string().min(8, 'Password is too short!').required('Required'),
  firstName: yup.string().required('Required'),
  lastName: yup.string().required('Required'),
  telephone: yup.string().required('Required'),
  address: yup.string().required('Required')
})

export const ValidationSchemaExample = () => (
  <div>
    <Formik
      initialValues={{
        email: '',
        password: '',
        newPassword: '',
        firstName: '',
        lastName: '',
        telephone: '',
        address: ''
      }}
      validationSchema={profileSchema}
    >
      {({ errors, touched }) => (
        <Form>
          <Field name="email" type="email" />
          {errors.email && touched.email ? <div>{errors.email}</div> : null}
          <button type="submit">Submit</button>
          <Field name="password" type="password" />
          {errors.password && touched.password ? <div>{errors.password}</div> : null}
          <button type="submit">Submit</button>
          <Field name="newPassword" type="password" />
          {errors.password && touched.password ? <div>{errors.password}</div> : null}
          <button type="submit">Submit</button>
          <Field name="firstName" />
          {errors.firstName && touched.firstName ? (
            <div>{errors.firstName}</div>
          ) : null}
          <Field name="lastName" />
          {errors.lastName && touched.lastName ? (
            <div>{errors.lastName}</div>
          ) : null}
          {errors.telephone && touched.telephone ? (
            <div>{errors.telephone}</div>
          ) : null}
          {errors.address && touched.address ? (
            <div>{errors.address}</div>
          ) : null}
        </Form>
      )}
    </Formik>
  </div>
)

const MyProfile = () => (
  <div id="my-profile" className="container">
    {/* <header className="text-center border-bottom">
      <h1>My Profile</h1>
      <div><Link to="/">Home Page</Link></div>
      <div><Link to="/my/Cart">My Cart</Link></div>
      <div><Link to="/my/orders">My Orders Index</Link></div>
      <div><Link to="/admin/orders">My Admin Orders</Link></div>
    </header> */}
    <body>
      <div className="container">
        <div className="row">
          <div className="col-lg">
            <h5>CHANGE EMAIL</h5>
            <div className="mb-3 row">
              <label htmlFor="email" className="col-sm-4 col-form-label">Email:</label>
              <div className="col-sm-8">
                <input className="form-control" id="email" />
              </div>
            </div>
            <button type="button" className="btn btn-warning col-lg">Change Email</button>

            <h5>CHANGE PASSWORD</h5>
            <div className="mb-3 row">
              <label htmlFor="password" className="col-sm-4 col-form-label">Current password:</label>
              <div className="col-sm-8">
                <input type="password" className="form-control" id="password" />
              </div>
            </div>
            <div className="mb-3 row">
              <label htmlFor="newPassword" className="col-sm-4 col-form-label">New password:</label>
              <div className="col-sm-8">
                <input type="password" className="form-control" id="newPassword" />
              </div>
            </div>
            <button type="button" className="btn btn-warning col-lg">Change Password</button>
          </div>
          <div className="col-lg">
            <h5>CUSTOMER INFORMATION</h5>
            <div className="mb-3 row">
              <label htmlFor="firstName" className="col-sm-4 col-form-label">First Name:</label>
              <div className="col-sm-8">
                <input className="form-control" id="firstName" />
              </div>
            </div>
            <div className="mb-3 row">
              <label htmlFor="lastName" className="col-sm-4 col-form-label">Last Name:</label>
              <div className="col-sm-8">
                <input className="form-control" id="lastName" />
              </div>
            </div>
            <div className="mb-3 row">
              <label htmlFor="telephone" className="col-sm-4 col-form-label">Telephone:</label>
              <div className="col-sm-8">
                <input className="form-control" id="telephone" />
              </div>
            </div>
            <div className="mb-3 row">
              <label htmlFor="address" className="col-sm-4 col-form-label">Address:</label>
              <div className="col-sm-8">
                <textarea className="form-control" id="address" rows="3" />
              </div>
            </div>
            <button type="button" className="btn btn-warning col-lg">Update Details</button>
          </div>
        </div>
      </div>
    </body>
  </div>
)

export default MyProfile
