import React from 'react'
import { Link } from 'react-router-dom'

import DeliveryDetails from '@/forms/delivery-details'
import CompCheckoutSide from '@/components/CheckoutSide'

const MyOrdersShow = () => (
  <>
    <div id="orders-new" className="container">
      <header className="text-center border-bottom">
        <h1>CHECKOUT</h1>
        <h1>ORDER #_________</h1>
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

export default MyOrdersShow
