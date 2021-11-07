import React from 'react'
import { Link } from 'react-router-dom'

import Table from 'react-bootstrap/Table'

const MyCart = () => (
  <div id="my-cart" className="container">
    <header className="text-center border-bottom">
      <h1>MY CART</h1>
      <div>Your shopping cart is currently empty.</div>
      <div><Link to="/products">View Products</Link></div>
    </header>

    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan="2">Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>

  </div>
)

export default MyCart
