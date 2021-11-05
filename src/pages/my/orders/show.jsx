import React from 'react'
import { Link } from 'react-router-dom'

const MyOrdersShow = () => (
  <div id="my-orders-show" className="container">
    <header className="text-center border-bottom">
      <h1>My Orders Show</h1>
      <div><Link to="/">Home Page</Link></div>
      <div><Link to="/my/Orders">My Orders Index</Link></div>
    </header>
  </div>
)

export default MyOrdersShow
