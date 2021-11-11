import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify'

import FormsDeliveryDetails from '@/forms/delivery-details'
import CompsCheckoutSide from '@/components/CheckoutSide'

import { createMyOrder } from '@/actions/my/orders/new'

const MyOrdersNew = ({ currentUser, ...props }) => {
  const handleCreateNewOrder = (values, methods) => {
    const { history: { push } } = props
    props.createMyOrder(values).then((resp) => {
      push(`/my/orders/${resp.data.order.id}`)
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
        <h1>DELIVERY DETAILS</h1>
      </header>
      <div className="row">
        <div className="col-12 col-lg-6">
          <FormsDeliveryDetails
            // initialValues currentUser is given from mapStateToProps or set null
            initialValues={currentUser || {}}
            onSubmit={handleCreateNewOrder}
          />
        </div>
        <div className="col-12 col-lg-6">
          <CompsCheckoutSide />
        </div>
        <ToastContainer />
      </div>
    </div>
  )
}

MyOrdersNew.propTypes = {
  createMyOrder: PropTypes.func.isRequired,
  currentUser: PropTypes.shape().isRequired,
  history: PropTypes.shape().isRequired
}

const mapStateToProps = (state) => ({
  currentUser: state.currentUser.currentUser
})

const mapDispatchToProps = {
  createMyOrder
}

export default connect(mapStateToProps, mapDispatchToProps)(MyOrdersNew)
