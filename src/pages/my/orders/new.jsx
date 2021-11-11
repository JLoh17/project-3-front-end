import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { toast } from 'react-toastify'

import FormsDeliveryDetails from '@/forms/delivery-details'
import CompsCheckoutSide from '@/components/CheckoutSide'

import { createMyOrder } from '@/actions/my/orders/new'

const MyOrdersNew = ({ currentUser, myCartState: { cart }, ...props }) => {
  const handleCreateNewOrder = (values, methods) => {
    const { history: { push } } = props
    const newValues = {
      ...values,
      grandTotal: cart.reduce((sum, item) => sum + (item.Product.price * item.quantity), 0)
    }
    props.createMyOrder(newValues).then((resp) => {
      push(`/my/orders/${resp.data.order.id}`)
    }).catch(() => {
      methods.setSubmitting(false)
      toast.error('Unable to submit, please refresh and try again', {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        progress: undefined
      })
    })
  }

  return (
    <div id="pages-orders-new" className="container my-3">
      <header className="text-center border-bottom">
        <h1>DELIVERY DETAILS</h1>
      </header>
      <div className="row">
        <div className="col-12 col-lg-6">
          <FormsDeliveryDetails
            // initialValues currentUser is given from mapStateToProps or set null
            initialValues={currentUser}
            onSubmit={handleCreateNewOrder}
          />
        </div>
        <div className="col-12 col-lg-6">
          <CompsCheckoutSide />
        </div>
      </div>
    </div>
  )
}

MyOrdersNew.propTypes = {
  createMyOrder: PropTypes.func.isRequired,
  currentUser: PropTypes.shape().isRequired,
  history: PropTypes.shape().isRequired,
  myCartState: PropTypes.shape().isRequired
}

const mapStateToProps = (state) => ({
  currentUser: state.currentUser.currentUser,
  myCartState: state.myCart
})

const mapDispatchToProps = {
  createMyOrder
}

export default connect(mapStateToProps, mapDispatchToProps)(MyOrdersNew)
