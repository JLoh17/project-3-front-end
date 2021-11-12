import React from 'react'
import Button from 'react-bootstrap/Button'
import { Form } from 'react-bootstrap'

const Footer = () => (
  <div className="footer-design mt-3">
    <div className="container-fluid">
      <h5>Come Find Us</h5>
      <p> 8/F, Cheung Hing Industrial Building, Kennedy Town, HK</p>
      <h5>Follow Us</h5>

      <div id="logo" className="mb-1 p-0">
        <span className="fab fa-facebook-square " />
        <span className="fab fa-instagram-square" />
      </div>

      <h5>Subscribe to our Newsletter</h5>
      <Form className="form-inline ms-0 mb-3">
        <Form.Group controlId="formBasicEmail">
          <div>
            <Form.Control type="email" placeholder="Enter email" />
            <Button variant="info">
              Subscribe
            </Button>
          </div>
        </Form.Group>
      </Form>
    </div>
  </div>
)

export default Footer
