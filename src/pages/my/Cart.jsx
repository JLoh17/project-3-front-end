import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import CartTable from '@/components/CartTable'

const MyCart = () => (
  <div id="my-cart" className="container">
    <header className="text-center border-bottom">
      <h1>MY CART </h1>
      <div> Your shopping cart is currently empty.</div>
      <div> <Link to="/products"> View Products </Link></div>
    </header>

    <CartTable />

    <div className="d-flex justify-content-end">
      <Button variant="success"> Next Step </Button>
    </div>

  </div>
)

export default MyCart
