import React from 'react'
import PropTypes from 'prop-types'

import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import DeliveryDetails from '@/forms/delivery-details'
import CompCheckoutSide from '@/components/CheckoutSide'

import { createMyOrder } from '@/actions/my/orders/new'

const MyOrdersNew = ({ currentUser, ...props }) => {
  const handleCreateNewOrder = (values) => {
    props.createMyOrder(values)
    const { history: { push } } = props
    push('/')
  }

  return (

    <>
      <div id="orders-new" className="container">
        <header className="text-center border-bottom">
          <h1>DELIVERY DETAILS</h1>
          {/* <div><Link to="/">Home Page</Link></div> */}
        </header>
        <div className="row">
          <div className="col-12 col-lg-6">
            <DeliveryDetails
              initialValues={currentUser}
              onSubmit={() => handleCreateNewOrder()}
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

MyOrdersNew.propTypes = {
  createMyOrder: PropTypes.func.isRequired,
  currentUser: PropTypes.shape().isRequired,
  history: PropTypes.shape().isRequired

}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = {
  createMyOrder
}

export default connect(mapStateToProps, mapDispatchToProps)(MyOrdersNew)
// export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MyOrdersNew))
