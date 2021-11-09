import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'

import SearchSort from '@/components/SearchSort'

import { getAdminOrdersIndex } from '@/actions/admin/index'

class AdminOrders extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      page: 1,
      sort: 'createdAt',
      status: ''
    }
  }

  componentDidMount() {
    this.props.getAdminOrdersIndex(this.state)
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
                  <Form.Control as="select" aria-label="status" name="status">
                    <option defaultChecked>Pending payment</option>
                    <option>Pending delivery</option>
                    <option>Delivered</option>
                  </Form.Control>
                </td>
              </tr>
            ))
            }

            <tr>
              <td colSpan="4" />
              <td>
                <Button variant="warning"> Update Status </Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    )
  }
}

AdminOrders.propTypes = {
  getAdminOrdersIndex: PropTypes.func.isRequired,
  adminOrderIndex: PropTypes.func.isRequired
  // history: PropTypes.shape().isRequired

}

const mapStateToProps = (state) => ({
  adminOrderIndex: state.adminOrderIndex
})

const mapDispatchToProps = {
  getAdminOrdersIndex
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminOrders)
