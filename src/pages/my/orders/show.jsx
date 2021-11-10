import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify'

import FormsConfirmCheckout from '@/forms/confirm-checkout'
import CompCheckoutSide from '@/components/CheckoutSide'

import { payMyOrder } from '@/actions/my/orders/pay'

const MyOrdersShow = ({ currentUser, ...props }) => {
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

  return (
    <div id="orders-new" className="container">
      <header className="text-center border-bottom">
        <h1>CHECKOUT</h1>
        <h1>ORDER #_________</h1>
      </header>
      <div className="row">
        <div className="col-12 col-lg-6">
          <FormsConfirmCheckout
            initialValues={currentUser || {}}
            onSubmit={handlePayNow}
          />
        </div>
        <div className="col-12 col-lg-6">
          <CompCheckoutSide />
        </div>
        <ToastContainer />
      </div>
    </div>
  )
}

MyOrdersShow.propTypes = {
  currentUser: PropTypes.shape().isRequired,
  payMyOrder: PropTypes.func.isRequired,
  history: PropTypes.shape().isRequired
}

const mapStateToProps = (state) => ({
  currentUser: state.currentUser.currentUser
})

const mapDispatchToProps = {
  payMyOrder
}

export default connect(mapStateToProps, mapDispatchToProps)(MyOrdersShow)
