import React from 'react'
import { Link } from 'react-router-dom'
import DeliveryDetails from '@/forms/delivery-details'

const MyOrdersNew = () => (
  <>
    <div id="orders-new" className="container">
      <header className="text-center border-bottom">
        <h1>DELIVERY DETAILS</h1>
        <div><Link to="/">Home Page</Link></div>
        <div><Link to="/my/OrdersShow">My Orders Show</Link></div>
      </header>
      <h2>Delivery Address Information</h2>
      <DeliveryDetails />
    </div>
  </>
)

export default MyOrdersNew
