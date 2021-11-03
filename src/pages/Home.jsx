import React from 'react'
import { Link } from 'react-router-dom'

const PagesHome = () => (
  <div id="pages-home" className="container">
    <header className="text-center border-bottom">
      <h1>Home Page</h1>
      <div><Link to="/ProductIndex">Product Index</Link></div>
      <div><Link to="/my/Cart">My Cart</Link></div>
      <div><Link to="/my/Profile">My Profile</Link></div>
      <div><Link to="/my/AdminOrders">My Admin Orders</Link></div>
      <div><Link to="/my/Orders">My Orders</Link></div>
    </header>
  </div>
)

export default PagesHome
