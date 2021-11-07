import React from 'react'

import Form from 'react-bootstrap/Form'

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
        <tr>
          <td className="first-row">Order.createdAt</td>
          <td className="first-row">Order.id</td>
          <td className="first-row">Order.grandtotal</td>
          <td className="first-row">Order.status</td>
          <td className="first-row">
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Control as="select">
                <option defaultChecked>Pending payment</option>
                <option>Pending delivery</option>
                <option>Delivered</option>
              </Form.Control>
            </Form.Group>
          </td>

        </tr>
      </tbody>
    </Table>

  </div>
)

export default AdminOrders
