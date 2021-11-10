import React from 'react'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'

import DeliveryDetails from '@/forms/delivery-details'
import CompCheckoutSide from '@/components/CheckoutSide'

const MyOrdersShow = () => {
  const handlePayNow = ({ ...props }) => {
    // props.createMyOrder
    console.log('handlePayNow')
  }

  return (

    <>
      <div id="orders-new" className="container">
        <header className="text-center border-bottom">
          <h1>CHECKOUT</h1>
          <h1>ORDER #_________</h1>
          {/* <div><Link to="/">Home Page</Link></div> */}
        </header>
        <div className="row">
          <div className="col-12 col-lg-6">
            <DeliveryDetails
              initialValues={{}}
              onSubmit={() => handlePayNow()}
            />
          </div>
          <div className="col-12 col-lg-6">
            <CompCheckoutSide />
          </div>
        </div>
      </div>
    </>
  )
}

MyOrdersShow.propTypes = {

}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(MyOrdersShow)
