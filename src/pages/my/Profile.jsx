import React from 'react'
// import { Link } from 'react-router-dom'

const MyProfile = () => (
  <div id="my-profile" className="container">
    <header className="text-center border-bottom">
      <h1 className="mb-3">My Profile</h1>
      {/* <div><Link to="/">Home Page</Link></div>
      <div><Link to="/my/Cart">My Cart</Link></div>
      <div><Link to="/my/orders">My Orders Index</Link></div>
      <div><Link to="/admin/orders">My Admin Orders</Link></div> */}
    </header>
    <body>
      <div className="container mt-4">
        <div className="row">
          <div className="col-lg">
            <h5>CHANGE EMAIL</h5>
            <div className="mb-3 row mt-4">
              <label htmlFor="inputPassword" className="col-sm-4 col-form-label">Email:</label>
              <div className="col-sm-8">
                <input className="form-control" id="inputEmail" />
                <button type="button" className="btn btn-warning col-lg mt-3">Change Email</button>
              </div>
            </div>

            <h5 className="mt-4">CHANGE PASSWORD</h5>
            <div className="mb-3 row mt-4">
              <label htmlFor="inputPassword" className="col-sm-4 col-form-label">Current password:</label>
              <div className="col-sm-8">
                <input type="password" className="form-control" id="inputPassword" />
              </div>
            </div>
            <div className="mb-3 row">
              <label htmlFor="inputPassword" className="col-sm-4 col-form-label">New password:</label>
              <div className="col-sm-8">
                <input type="password" className="form-control" id="inputNewPassword" />
                <button type="button" className="btn btn-warning col-lg mt-3">Change Password</button>
              </div>
            </div>
          </div>
          <div className="col-lg">
            <h5>CUSTOMER INFORMATION</h5>
            <div className="mb-3 row mt-4">
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
              <label htmlFor="phone" className="col-sm-4 col-form-label">Telephone:</label>
              <div className="col-sm-8">
                <input className="form-control" id="phone" />
              </div>
            </div>
            <div className="mb-3 row">
              <label htmlFor="address" className="col-sm-4 col-form-label">Address:</label>
              <div className="col-sm-8">
                <textarea className="form-control" id="address" rows="3" />
                <button type="button" className="btn btn-warning col-lg mt-3">Update Details</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>

  </div>
)

export default MyProfile
