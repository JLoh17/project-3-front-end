import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'
import { NavLink } from 'react-router-dom'
import { Navbar, Nav, Form, Button, FormControl, NavDropdown, OverlayTrigger } from 'react-bootstrap'
// import NavDropdown from 'react-bootstrap/NavDropdown'
// import Navbar from 'react-bootstrap/Navbar'
// import Nav from 'react-bootstrap/Nav'
// import Form from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/Button'
// import FormControl from 'react-bootstrap/FormControl'
import { connect } from 'react-redux'

import { authLogin, authSignup, authLogout } from '@/actions/auth'
import ModalsRegister from '@/modals/register'
import LoginPopover from '@/components/LoginPopup'

class LayoutsNavbar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showRegisterModal: false
    }

    this.handleRegisterSubmit = this.handleRegisterSubmit.bind(this)
    this.handleLogoutClick = this.handleLogoutClick.bind(this)
    this.handleRegisterClick = this.handleRegisterClick.bind(this)
    this.closeRegisterModal = this.closeRegisterModal.bind(this)
  }

  handleRegisterSubmit(values) {
    this.props.authSignup(values).then(() => {
      this.closeRegisterModal()
    })
  }

  handleLoginSubmit(values) {
    this.props.authLogin(values).then(() => {
      const { history: { push } } = this.props
      push('/products')
    })
  }

  // handleLoginClick() {
  //   <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
  //     <Button variant="success">Click me to see</Button>
  //   </OverlayTrigger>
  // }

  handleLogoutClick() {
    this.props.authLogout()
  }

  handleRegisterClick() {
    this.setState({ showRegisterModal: true })
  }

  closeRegisterModal() {
    this.setState({ showRegisterModal: false })
  }

  render() {
    const { currentUserState: { currentUser } } = this.props
    const { showRegisterModal } = this.state

    return (
      <div id="navbar">

        <Navbar bg="light" expand="lg">
          <Navbar.Brand as={NavLink} to="/">Company Logo</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">

            {/* <Nav className="ml-auto"> */}

            {
                currentUser ? (
                  <>
                    <Form inline>
                      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                      <Button variant="outline-success">Search</Button>
                    </Form>
                    <NavDropdown alignRight title={<span><i className="fas fa-user-check" />My Profile</span>}>
                      <NavDropdown.Item as={NavLink} to="/api/my/profile">Edit My Profile</NavDropdown.Item>
                      <NavDropdown.Item as={NavLink} to="/api/my/orders">My Order History</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item onClick={this.handleLogoutClick} eventKey="4">Logout</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link as={NavLink} to="/api/my/cart" eventKey="3">
                      <span className="fas fa-shopping-cart" />My Cart
                    </Nav.Link>
                  </>
                ) : (
                  <>
                    <Nav className="mr-auto">
                      <Nav.Link onClick={this.handleRegisterClick} eventKey="1">
                        <span className="fas fa-user-plus me-1" />Register
                      </Nav.Link>
                    </Nav>
                    <Form inline>
                      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                      <Button variant="outline-success">Search</Button>
                    </Form>
                    <OverlayTrigger alignRight trigger="click" placement="top" overlay={LoginPopover} eventKey="2">
                      <span className="fas fa-user-check">Login</span>
                    </OverlayTrigger>
                  </>
                )
              }
            {/* </Nav> */}
          </Navbar.Collapse>
        </Navbar>
        { showRegisterModal && <ModalsRegister close={this.closeRegisterModal} onSubmit={this.handleRegisterSubmit} /> }
      </div>
    )
  }
}

LayoutsNavbar.propTypes = {
  currentUserState: PropTypes.shape().isRequired,
  authLogout: PropTypes.func.isRequired,
  authSignup: PropTypes.func.isRequired,
  authLogin: PropTypes.func.isRequired,
  history: PropTypes.shape().isRequired

}

const mapStateToProps = (state) => ({
  currentUserState: state.currentUser
})

const mapDispatchToProps = {
  authLogout,
  authSignup,
  authLogin
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LayoutsNavbar))
