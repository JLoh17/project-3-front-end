import React from 'react'
import { Link } from 'react-router-dom'

const MyProfile = () => (
  <div id="my-profile" className="container">
    <header className="text-center border-bottom">
      <h1>My Profile</h1>
      <div><Link to="/">Home Page</Link></div>
      <div><Link to="/my/Cart">My Cart</Link></div>
      <div><Link to="/my/orders">My Orders Index</Link></div>
      <div><Link to="/admin/orders">My Admin Orders</Link></div>
    </header>
  </div>
)

export default MyProfile
