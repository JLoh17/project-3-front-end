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
      </header>
      <div className="row">
        <div className="col-12 col-lg-6">
          <DeliveryDetails
            initialValues={{}}
            onSubmit={() => {}}
          />
        </div>
        <div className="col-12 col-lg-6">
          <CompCheckoutSide />
        </div>
      </div>
    </div>
  </>
)

export default MyOrdersNew
