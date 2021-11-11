import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
// import { ToastContainer, toast } from 'react-toastify'

import FormsConfirmCheckout from '@/forms/confirm-checkout'
import CompsPaymentSide from '@/components/PaymentSide'

import { payMyOrder } from '@/actions/my/orders/pay'

const MyOrdersShow = ({ orderStatus: { orderDetails }, currentUser, match, ...props }) => {
  const handlePayNow = (values, methods) => {
    const { history: { push } } = props
    props.payMyOrder(values).then(() => {
      push('/my/orders/')
    }).catch(() => {
      methods.setSubmitting(false)
      toast.error('Error to submit, please try again', {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        progress: undefined
      })
    })
  }

  useEffect(() => {
  }, [])

  if (orderDetails.status === 'Pending-Payment') {
    return (
      <>
        <header className="text-center border-bottom">
          <h1>CHECKOUT</h1>
        </header>
        <div className="row">
          <div className="col-12 col-lg-6">
            <FormsConfirmCheckout
              initialValues={orderDetails || {}}
              onSubmit={handlePayNow}
            />
          </div>
          <div className="col-12 col-lg-6">
            <CompsPaymentSide />
          </div>
          <ToastContainer />
        </div>
      </>
    )
  }

  if (orderDetails.status === 'Pending-Delivery') {
    return (
      <>
        <header className="text-center border-bottom">
          <h1>ORDER {orderDetails.id}</h1>
        </header>
        <div className="row">
          <div className="col-12 col-lg-6">
            <FormsConfirmCheckout
              initialValues={orderDetails || {}}
              onSubmit="disabled"
            />
          </div>
          <div className="col-12 col-lg-6">
            <CompsPaymentSide />
          </div>
          <ToastContainer />
        </div>
      </>
    )
  }

  return (
    <div id="orders-new" className="container">
      {/* <header className="text-center border-bottom">
        <h1>CHECKOUT</h1>
        <h1>ORDER #_________</h1>
      </header>
      <div className="row">
        <div className="col-12 col-lg-6">
          <FormsConfirmCheckout
            initialValues={orderDetails || {}}
            onSubmit={handlePayNow}
          />
        </div>
        <div className="col-12 col-lg-6">
          <CompsPaymentSide />
        </div>
        <ToastContainer />
      </div> */}
    </div>
  )
}

MyOrdersShow.propTypes = {
  currentUser: PropTypes.shape().isRequired,
  payMyOrder: PropTypes.func.isRequired,
  history: PropTypes.shape().isRequired,
  orderStatus: PropTypes.shape().isRequired
}

const mapStateToProps = (state) => ({
  currentUser: state.currentUser.currentUser,
  orderStatus: state.orderShow
})

const mapDispatchToProps = {
  payMyOrder
}

export default connect(mapStateToProps, mapDispatchToProps)(MyOrdersShow)
