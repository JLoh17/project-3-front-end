import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import CompLoading from '@/components/Loading'

import { getMyCart } from '@/actions/my/cart/index'

const CompsCheckoutSide = ({ myCartState: { cart, isLoading }, ...props }) => {
  useEffect(() => {
    props.getMyCart()
  }, [])

  if (isLoading) {
    return (
      <div className="container my-3">
        <CompLoading />
      </div>
    )
  }
  if (cart.length === 0) return <div>No item in cart</div>
  return (
    <div id="comps-checkout-side">
      <h4 className="text-center my-3">Your Cart</h4>
      <table className="table table-sm table-bordered">
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Size</th>
            <th>Subtotal</th>
          </tr>
        </thead>

        <tbody>
          {
            cart.map((item, i) => (
              <tr key={item.id}>
                <td>{i + 1}</td>
                <td>{item.Product.productName}</td>
                <td className="text-right">{item.Product.price.toLocaleString('en-HK', {
                  style: 'currency',
                  currency: 'HKD'
                })}</td>
                <td className="text-center">{item.quantity}</td>
                <td className="text-center">{item.size}</td>
                <td className="text-right">{
                (item.quantity * item.Product.price).toLocaleString('en-HK', {
                  style: 'currency',
                  currency: 'HKD'
                })
                }</td>
              </tr>
            ))
          }
        </tbody>
      </table>
      <div className="d-flex justify-content-end p-2">
        <h4><b> Total:</b></h4>
        <span>&nbsp;</span>
        <span><h4><b>{cart.reduce((sum, item) => sum + (item.Product.price * item.quantity), 0).toLocaleString('en-HK', {
          style: 'currency',
          currency: 'HKD'
        })}</b></h4></span>
      </div>
    </div>
  )
}

CompsCheckoutSide.propTypes = {
  myCartState: PropTypes.shape().isRequired,
  getMyCart: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  myCartState: state.myCart
})

const mapDispatchToProps = {
  getMyCart
}

export default connect(mapStateToProps, mapDispatchToProps)(CompsCheckoutSide)
