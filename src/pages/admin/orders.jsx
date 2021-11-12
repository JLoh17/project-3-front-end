import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Form from 'react-bootstrap/Form'
import Table from 'react-bootstrap/Table'

import SearchSort from '@/components/SearchSort'

import { getAdminOrdersIndex, updateAdminOrderStatus } from '@/actions/admin/index'

class AdminOrders extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      page: 1,
      sort: 'createdAt',
      status: ''
    }

    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    this.props.getAdminOrdersIndex(this.state)
  }

  handleChange(e, OrderId) {
    this.props.updateAdminOrderStatus({ status: e.target.value }, OrderId)
  }

  render() {
    const { adminOrderIndex: { listAdminOrder } } = this.props

    return (
      <div id="admin-orders" className="container">
        <header className="text-center my-3">
          <h1>My Admin Orders</h1>
        </header>
        <SearchSort className="my-3" />

        <Table className="my-3 text-center">
          <thead>
            <tr>
              <th>Date Ordered</th>
              <th>Order Number</th>
              <th>Total</th>
              <th>Status</th>
              <th>Change Status</th>
            </tr>
          </thead>

          <tbody>
            {
            listAdminOrder.map((order) => (
              <tr>
                <td>{order.createdAt.slice(0, 10)}</td>
                <td>{order.id}</td>
                <td>{order.grandTotal.toLocaleString('en-HK', {
                  style: 'currency',
                  currency: 'HKD'
                })}</td>
                <td>{order.status}</td>
                <td>
                  {/* If just (e) then no need to type, but if want to pass something else as well, then need to add e. In this case we need to pass the order.id, which is generated from map. */}
                  <Form.Control as="select" aria-label="status" name="status" onChange={(e) => this.handleChange(e, order.id)}>

                    <option
                      defaultChecked
                      value="none"
                    >-</option>
                    <option
                      value="Pending-Payment"
                    >Pending payment</option>
                    <option
                      value="Pending-Delivery"
                    >Pending delivery</option>
                    <option
                      value="Delivered"
                    >Delivered</option>
                    <option
                      value="Cancelled-Order"
                    >Cancel Order</option>
                  </Form.Control>
                </td>
              </tr>
            ))
            }
          </tbody>
        </Table>
      </div>
    )
  }
}

// TODO - pages required for administrator
AdminOrders.propTypes = {
  getAdminOrdersIndex: PropTypes.func.isRequired,
  updateAdminOrderStatus: PropTypes.func.isRequired,
  adminOrderIndex: PropTypes.func.isRequired
  // history: PropTypes.shape().isRequired

}

const mapStateToProps = (state) => ({
  adminOrderIndex: state.adminOrderIndex
})

const mapDispatchToProps = {
  getAdminOrdersIndex,
  updateAdminOrderStatus
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminOrders)
