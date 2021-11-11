import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import CartTable from '@/components/CartTable'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { getMyCart } from '@/actions/my/cart/index'

const MyCart = ({ myCartState: { cart }, ...props }) => {
  useEffect(() => {
    props.getMyCart()
  }, [])

  return (
    <div id="my-cart" className="container">
      <header className="text-center border-bottom">
        <h1>My Cart</h1>
      </header>

      {
      (cart.length === 0) ? (
        <div className="my-3 text-center">
          <div> Your shopping cart is currently empty.</div>
          <div> <Link to="/products"> View Products </Link></div>
        </div>
      ) : (
        <CartTable />
      )
      }
    </div>
  )
}

MyCart.propTypes = {
  myCartState: PropTypes.shape().isRequired,
  getMyCart: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  myCartState: state.myCart
})

const mapDispatchToProps = {
  getMyCart

}

export default connect(mapStateToProps, mapDispatchToProps)(MyCart)
