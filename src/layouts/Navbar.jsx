import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import { NavLink } from 'react-router-dom'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

class LayoutsNavbar extends React.Component {
  render() {
    return (
    // <Navbar id="layouts-navbar" bg="light" variant="light" expand="lg" collapseOnSelect>
    //   <Navbar.Brand as={NavLink} to="/">Company Logo</Navbar.Brand>
    //   <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //   <Navbar.Collapse id="basic-navbar-nav">
    //     <Nav className="ml-auto">
    //       <Nav.Link as={NavLink} to="/ProductIndex" eventKey="1">Product Index</Nav.Link>
    //       <Nav.Link as={NavLink} to="/my/cart" eventKey="2">My Cart</Nav.Link>
    //       <Nav.Link onClick={this.handleLogoutClick} eventKey="3">Logout</Nav.Link>
    //       <Nav.Link as={NavLink} to="/auth/signup" eventKey="4">Signup</Nav.Link>
    //       <Nav.Link as={NavLink} to="/auth/login" eventKey="5">Login</Nav.Link>
    //     </Nav>
    //   </Navbar.Collapse>
    // </Navbar>
      <div id="navbar">

        <Navbar bg="light" expand="lg">
          <Navbar.Brand as={NavLink} to="/">Company Logo</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={NavLink} to="/auth/signup" eventKey="4">
                <span className="fas fa-user-plus me-1" />Register
              </Nav.Link>
            </Nav>

            <Nav className="ml-auto">
              <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
              </Form>
              <Nav.Link as={NavLink} to="/auth/login" eventKey="5">
                <span className="fas fa-user-check" />Login
              </Nav.Link>
              <Nav.Link as={NavLink} to="" eventKey="">
                <span className="fas fa-user-check" />???
              </Nav.Link>

              <NavDropdown alignRight title={<span><i className="fas fa-user-check" />My Profile</span>}>
                <NavDropdown.Item href="#action/3.1">Edit</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">My Order History</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={this.handleLogoutClick} eventKey="3">Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>

          </Navbar.Collapse>

        </Navbar>
      </div>
    )
  }
}

export default LayoutsNavbar
