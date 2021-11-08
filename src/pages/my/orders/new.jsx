import React from 'react'
import { Link } from 'react-router-dom'
import DeliveryDetails from '@/forms/delivery-details'
import CompCheckoutSide from '@/components/CheckoutSide'

const MyOrdersNew = () => (
  <>
    <div id="orders-new" className="container">
      <header className="text-center border-bottom">
        <h1>DELIVERY DETAILS</h1>
        <div><Link to="/">Home Page</Link></div>
        <div><Link to="/my/OrdersShow">My Orders Show</Link></div>
      </header>
      <h2>Delivery Address Information</h2>
      <div className="d-flex">
        <div className="col-6">
          <DeliveryDetails />
        </div>
        <div className="col-6">
          <CompCheckoutSide />
        </div>

      </div>
    </div>
  </>
)

export default MyOrdersNew
