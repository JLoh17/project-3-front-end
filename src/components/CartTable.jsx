import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Table from 'react-bootstrap/Table'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'

import { getMyCart, updateCartQuantity, destroyCartItem } from '@/actions/my/cart/index'

const CartTable = ({ myCartState: { cart }, ...props }) => {
  useEffect(() => {
    props.getMyCart()
  }, [])

  const handleChangeQuantity = (e, CartId) => {
    props.updateCartQuantity({ quantity: e.target.value }, CartId)
  }

  const deleteOrderClick = (CartId) => {
    props.destroyCartItem(CartId)
  }

  // useEffect is componentDidMount and componentWillUpdate. Keep the [] as that is for componentWillUpdate.
  // Template for useEffect

  return (
    <div id="ComponentsCartTable" className="container">

      <Table className="text-center mt-3" responsive="md">
        <thead>
          <tr>
            <th colSpan="2" />
            <th>Size</th>
            <th>Unit Cost</th>
            <th>Quantity</th>
            <th>Subtotal</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {
            cart.map((item) => (
              <tr key={item.id}>
                <td><Image src={item.Product.Images?.[0]?.imageURL} className="pic-resize" /></td>
                <td>{item.Product.productName}</td>
                <td>{item.size}</td>
                <td>
                  {
                    item.Product.price.toLocaleString('en-HK', {
                      style: 'currency',
                      currency: 'HKD'
                    })
                  }
                </td>
                <td>
                  <select className="form-control" name="quantity" onChange={(e) => handleChangeQuantity(e, item.id)} value={item.quantity}>
                    {
                      [...Array(3)].map((_, i) => { // Loops to how many options you want in the selector
                        const key = i
                        const value = i + 1
                        return (
                          <option key={key} value={value}>{value}</option> // If item.quantity === the value, then that will be the selected
                        )
                      })
                    }
                  </select>
                </td>
                <td>
                  {
                    (item.Product.price * item.quantity).toLocaleString('en-HK', {
                      style: 'currency',
                      currency: 'HKD'
                    })
                  }
                </td>
                <td>
                  <div className="fas fa-trash-alt trashBtn" onClick={() => deleteOrderClick(item.id)}> Remove</div>
                </td>
              </tr>
            ))
          }

        </tbody>

        <tbody>
          <tr>
            <td colSpan="4" />
            <td>
              <h4>Total:</h4>
            </td>
            <td>
              <h4>{cart.reduce((sum, item) => sum + (item.Product.price * item.quantity), 0).toLocaleString('en-HK', {
                style: 'currency',
                currency: 'HKD' })}
              </h4>
            </td>
            <td>
              <Link to="/my/orders/new">
                <Button variant="success"> Next Step </Button>
              </Link>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

CartTable.propTypes = {
  myCartState: PropTypes.shape().isRequired,
  getMyCart: PropTypes.func.isRequired,
  updateCartQuantity: PropTypes.func.isRequired,
  destroyCartItem: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  myCartState: state.myCart
})

const mapDispatchToProps = {
  getMyCart,
  updateCartQuantity,
  destroyCartItem
}

export default connect(mapStateToProps, mapDispatchToProps)(CartTable)
