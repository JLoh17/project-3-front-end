import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Table from 'react-bootstrap/Table'
import Image from 'react-bootstrap/Image'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import { getMyCart } from '@/actions/my/cart/index'

const CartTable = ({ myCartState: { cart, isLoading }, ...props }) => {
  useEffect(() => {
    props.getMyCart()
  }, [])

  const [quantity, setQuantity] = useState(1)

  // useEffect is componentDidMount and componentWillUpdate. Keep the [] as that is for componentWillUpdate.
  // Template for useEffect

  return (
    <div id="ComponentsCartTable" className="container">

      <Table className="text-center mt-3" responsive="md">
        <thead>
          <tr>
            <th colSpan="2" />
            <th>Unit Cost</th>
            <th>Quantity</th>
            <th>Subtotal</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {
            cart.map((item) => (
              <tr>
                <td>
                  <Image src={item.Product.Images?.[0]?.imageURL} className="pic-resize" />
                </td>
                <td>{item.Product.productName}</td>
                <td>{item.Product.price.toLocaleString('en-HK', {
                  style: 'currency',
                  currency: 'HKD'
                })}
                </td>
                <td>
                  <Form>
                    <Form.Control as="select" aria-label="quantity" name="quantity" onChange={(e) => setQuantity(e, item.quantity)}>
                      <option value="Quantity-1">1</option>
                      <option value="Quantity-2">2</option>
                      <option value="Quantity-3">3</option>
                      <option value="Quantity-4">4</option>
                      <option value="Quantity-5">5</option>
                    </Form.Control>
                  </Form>
                </td>
                <td>{(item.Product.price * item.quantity).toLocaleString('en-HK', {
                  style: 'currency',
                  currency: 'HKD' })}</td>
                <td>
                  <div className="fas fa-trash-alt trashBtn"> Remove</div>
                </td>
              </tr>
            ))
          }

        </tbody>

        <tbody>
          <tr>
            <td colSpan="3" />
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
  getMyCart: PropTypes.func.isRequired

}

const mapStateToProps = (state) => ({
  myCartState: state.myCart
})

const mapDispatchToProps = {
  getMyCart
}

export default connect(mapStateToProps, mapDispatchToProps)(CartTable)
