import React from 'react'
// import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import Button from 'react-bootstrap/Button'
import { Form } from 'react-bootstrap'

const PagesHome = () => (
  <div id="pages-home" className="container-fluid m-1">

    <header className="text-center border-bottom my-3">
      <h1> Insert company name here</h1>
      {/* <div><Link to="/ProductIndex">Product Index</Link></div>
      <div><Link to="/my/Cart">My Cart</Link></div>
      <div><Link to="/my/Profile">My Profile</Link></div>
      <div><Link to="/my/AdminOrders">My Admin Orders</Link></div> */}
    </header>

    <div className="d-flex justify-content-around my-3">
      <CardGroup>

        {/* FOR LATER!! put the onClick on the Card itself */}
        <Card>
          <Button variant="light" className="button shadow-none">
            <Card.Img variant="top" className="cardImage" src="https://www.intimissimi.com/dw/image/v2/BCXQ_PRD/on/demandware.static/-/Sites-INT_EC_COM/default/dw04872283/images/CMU12G_wear_800_M.jpg?sw=400&sfrm=png" />
            <Card.Title className="text text-white">Men&apos;s Tops</Card.Title>
          </Button>
        </Card>

        <Card>
          <Button variant="light" className="button shadow-none">
            <Card.Img variant="top" className="cardImage" src="https://modone.com/eng_pl_Mens-shoes-T326-brown-14029_7.jpg" />
            <Card.Title className="text text-white">Men&apos;s Shoes</Card.Title>
          </Button>
        </Card>

        <Card>
          <Button variant="light" className="button shadow-none">
            <Card.Img variant="top" className="cardImage" src="https://i.pinimg.com/736x/04/b3/3f/04b33f8059ce671b3569b7c4bb28f7a3--men-hats-fedora-mens-hats.jpg" />
            <Card.Title className="text text-white">Men&apos;s Hats</Card.Title>
          </Button>
        </Card>

      </CardGroup>
    </div>

    <div className="border-top p-3">
      <h5>Come Find Us</h5>
      <p> 8/F, Cheung Hing Industrial Building, Kennedy Town, HK</p>
      <h5>Follow Us</h5>

      <div id="logo" className="mb-1 p-0">
        <span className="fab fa-facebook-square " />
        <span className="fab fa-instagram-square" />
      </div>

      <h5>Subscribe to our news letter</h5>
      <Form className="form-inline ms-0 mb-3">
        <Form.Group controlId="formBasicEmail">
          <div>
            <Form.Control type="email" placeholder="Enter email" />
            <Button variant="info" disabled>
              Subscribe
            </Button>
          </div>
        </Form.Group>
      </Form>
    </div>
  </div>
)

export default PagesHome
