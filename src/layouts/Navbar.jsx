import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import { NavLink } from 'react-router-dom'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'

class LayoutsNavbar extends React.Component {
  render() {
    return (
      <div id="navbar">

        <Navbar bg="light" expand="lg">
          <Navbar.Brand as={NavLink} to="/">Company Logo</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={NavLink} to="/auth/signup" eventKey="">
                <span className="fas fa-user-plus me-1" />Register
              </Nav.Link>
            </Nav>

            <Nav className="ml-auto">
              <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
              </Form>
              <Nav.Link as={NavLink} to="/auth/login" eventKey="">
                <span className="fas fa-user-check" />Login
              </Nav.Link>
              <Nav.Link as={NavLink} to="/api/my/cart" eventKey="">
                <span className="fas fa-shopping-cart" />My Cart
              </Nav.Link>

              <NavDropdown alignRight title={<span><i className="fas fa-user-check" />My Profile</span>}>
                <NavDropdown.Item as={NavLink} to="/api/my/profile">Edit My Profile</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/api/my/orders">My Order History</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={this.handleLogoutClick} eventKey="">Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}

export default LayoutsNavbar
