import React from 'react'
import { Link } from 'react-router-dom'

const MyCart = () => (
  <div id="product-index" className="container">
    <header className="text-center border-bottom">
      <h1>My Cart</h1>
      <div><Link to="/">Home Page</Link></div>
      <div><Link to="/ProductIndex">Product Index</Link></div>
      <div><Link to="/my/OrdersShow">My Orders Show</Link></div>

    </header>
  </div>
)

export default MyCart
