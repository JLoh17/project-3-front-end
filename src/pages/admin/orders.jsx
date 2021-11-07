import React from 'react'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import SearchSort from '@/components/SearchSort'
import Table from 'react-bootstrap/Table'

const AdminOrders = () => (
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

        {/* Map this section */}
        <tr>
          <td>Order.createdAt</td>
          <td>Order.id</td>
          <td>Order.grandtotal</td>
          <td>Order.status</td>
          <td>
            <Form.Control as="select" aria-label="status" name="status">
              <option defaultChecked>Pending payment</option>
              <option>Pending delivery</option>
              <option>Delivered</option>
            </Form.Control>
          </td>
        </tr>

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

export default AdminOrders
