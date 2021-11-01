import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import { NavLink } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'

class LayoutsNavbar extends React.Component {
  render() {
    return (
      <Navbar id="layouts-navbar" bg="light" variant="light" expand="lg" collapseOnSelect>
        <Navbar.Brand as={NavLink} to="/">Home Page</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={NavLink} to="/ProductIndex" eventKey="1">Product Index</Nav.Link>
            <Nav.Link as={NavLink} to="/my/cart" eventKey="2">My Cart</Nav.Link>
            <Nav.Link onClick={this.handleLogoutClick} eventKey="3">Logout</Nav.Link>
            <Nav.Link as={NavLink} to="/auth/signup" eventKey="4">Signup</Nav.Link>
            <Nav.Link as={NavLink} to="/auth/login" eventKey="5">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default LayoutsNavbar
