import React from 'react'
import { Link } from 'react-router-dom'
import CartTable from '@/components/CartTable'

import Table from 'react-bootstrap/Table'

const MyCart = () => (
  <div id="my-cart" className="container">
    <header className="text-center border-bottom">
      <h1>MY CART </h1>
    </header>


    {/* If customer does not have a cart, show "Shopping Cart is empty", otherwise show the 2nd one */}
    <div className="my-3 text-center">
      <div> Your shopping cart is currently empty.</div>
      <div> <Link to="/products"> View Products </Link></div>
    </div>

    <CartTable />

  </div>
)

export default MyCart
