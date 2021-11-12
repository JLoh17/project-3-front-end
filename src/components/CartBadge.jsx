import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Badge } from 'react-bootstrap'
import { connect } from 'react-redux'

import { getMyCart } from '@/actions/my/cart/index'

const CompsCartBadge = ({ myCartState: { cart }, ...props }) => {
  useEffect(() => {
    props.getMyCart()
  }, [])

  if (cart.length === 0) return null
  return (

    <Badge variant="success" className="mx-1"><span /> {cart.length} </Badge>
  )
}

CompsCartBadge.propTypes = {
  myCartState: PropTypes.shape().isRequired,
  getMyCart: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  myCartState: state.myCart
})

const mapDispatchToProps = {
  getMyCart
}

export default connect(mapStateToProps, mapDispatchToProps)(CompsCartBadge)
