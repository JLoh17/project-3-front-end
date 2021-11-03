import React from 'react'
import { Link } from 'react-router-dom'

const MyOrdersIndex = () => (
  <div id="my-orders-index" className="container">
    <header className="text-center border-bottom">
      <h1>My Orders Index</h1>
      <div><Link to="/">Home Page</Link></div>
      <div><Link to="/my/OrdersShow">My Orders Show</Link></div>
      <div><Link to="/my/OrdersNew">My Orders New</Link></div>
    </header>
  </div>
)

export default MyOrdersIndex
