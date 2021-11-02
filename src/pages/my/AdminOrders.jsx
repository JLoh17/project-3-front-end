import React from 'react'
import { Link } from 'react-router-dom'

const MyAdminOrders = () => (
  <div id="admin-orders" className="container">
    <header className="text-center border-bottom">
      <h1>My Admin Orders</h1>
      <div><Link to="/">Home Page</Link></div>
    </header>
  </div>
)

export default MyAdminOrders
