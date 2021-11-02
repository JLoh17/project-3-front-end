import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ActiveLastBreadcrumb from '@/components/Breadcrumb'

const MyCart = () => (
  <>
    <ActiveLastBreadcrumb />
    <div id="my-cart" className="container">
      <header className="text-center border-bottom">
        <h1>MY CART</h1>
        <div>Your shopping cart is currently empty.</div>
        <div><Link to="/ProductIndex">View Products</Link></div>
      </header>
    </div>
  </>
)

export default MyCart
