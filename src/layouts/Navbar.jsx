import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'
import { NavLink } from 'react-router-dom'
import { Navbar, Nav, Form, Button, FormControl, NavDropdown } from 'react-bootstrap'
import { connect } from 'react-redux'

import { authSignup, authLogout } from '@/actions/auth'
import ModalsRegister from '@/modals/register'
import LoginPopover from '@/components/LoginPopover'
import CartBadge from '@/components/CartBadge'

class LayoutsNavbar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showRegisterModal: false
    }

    this.handleRegisterSubmit = this.handleRegisterSubmit.bind(this)
    this.handleLogoutClick = this.handleLogoutClick.bind(this)
    this.openRegisterModal = this.openRegisterModal.bind(this)
    this.closeRegisterModal = this.closeRegisterModal.bind(this)
  }

  handleRegisterSubmit(values) {
    this.props.authSignup(values).then(() => {
      this.closeRegisterModal()
    })
    // .catch(() => {
    //   methods.setSubmitting(false)
    //   toast.error('Register fields entered incorrectly, please try again', {
    //     position: 'top-right',
    //     autoClose: 5000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     progress: undefined
    //   })
  }

  handleLogoutClick() {
    const { history: { push } } = this.props
    this.props.authLogout().then(() => {
      push('/')
    })
  }

  openRegisterModal() {
    this.setState({ showRegisterModal: true })
  }

  closeRegisterModal() {
    this.setState({ showRegisterModal: false })
  }

  renderCollapse() {
    const { currentUserState: { currentUser } } = this.props

    if (currentUser) {
      return (
        <>
          <Nav className="ml-auto">
            {/* <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
            </Form> */}
            <NavDropdown alignRight title={<span><i className="fas fa-user-check" /> My Profile</span>}>
              <NavDropdown.Item as={NavLink} to="/my/profile">Edit My Profile</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/my/orders">My Order History</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={this.handleLogoutClick} eventKey="4">Logout</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={NavLink} to="/my/cart" eventKey="3">
              <span className="fas fa-shopping-cart" /> My Cart
              <CartBadge />
            </Nav.Link>
          </Nav>

        </>
      )
    }

    return (
      <>
        <Nav className="mr-auto">
          <Nav.Link onClick={this.openRegisterModal} eventKey="1">
            <span className="fas fa-user-plus me-1" /> Register
          </Nav.Link>
        </Nav>

        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
        <Nav>
          <LoginPopover>
            <Nav.Link eventKey="2">
              <span className="fas fa-user-check"> Login</span>
            </Nav.Link>
          </LoginPopover>
        </Nav>
      </>
    )
  }

  render() {
    const { showRegisterModal } = this.state

    return (
      <>
        <Navbar id="navbar" bg="light" expand="lg">
          <Navbar.Brand as={NavLink} to="/"><img src="/assets/logo" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            {this.renderCollapse()}
          </Navbar.Collapse>
        </Navbar>
        { showRegisterModal && <ModalsRegister close={this.closeRegisterModal} onSubmit={this.handleRegisterSubmit} /> }
      </>
    )
  }
}

LayoutsNavbar.propTypes = {
  history: PropTypes.shape().isRequired,
  currentUserState: PropTypes.shape().isRequired,
  authLogout: PropTypes.func.isRequired,
  authSignup: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  currentUserState: state.currentUser
})

const mapDispatchToProps = {
  authLogout,
  authSignup
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LayoutsNavbar))
