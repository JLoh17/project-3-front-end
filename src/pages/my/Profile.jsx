import React from 'react'
import { Link } from 'react-router-dom'
import { Form } from 'react-bootstrap'

const MyProfile = () => (
  <div id="my-profile" className="container">
    <header className="text-center border-bottom">
      <h1>My Profile</h1>
      <div><Link to="/">Home Page</Link></div>
      <div><Link to="/my/Cart">My Cart</Link></div>
      <div><Link to="/my/orders">My Orders Index</Link></div>
      <div><Link to="/admin/orders">My Admin Orders</Link></div>
    </header>

    <Form>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="name@example.com" />
  </Form.Group>
  </div>
)

export default MyProfile
