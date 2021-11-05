import React from 'react'
// import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import Button from 'react-bootstrap/Button'
import { Form } from 'react-bootstrap'

const categories = [
  {
    id: 'tops',
    name: 'Men\'s Tops',
    src: 'https://cdn.shopify.com/s/files/1/0543/4454/8549/files/MG_2317STEFAN-VAN-RUIJVEN-FOTOGRAFIE---OUTRGS-MEN_S-FASHION_1800x.jpg?v=1621854112'
  }, {
    id: 'shoes',
    name: 'Men\'s Shoes',
    src: 'https://modone.com/eng_pl_Mens-shoes-T326-brown-14029_7.jpg'
  }, {
    id: 'hats',
    name: 'Men\'s Hats',
    src: 'https://i.pinimg.com/736x/04/b3/3f/04b33f8059ce671b3569b7c4bb28f7a3--men-hats-fedora-mens-hats.jpg'
  }
]

const PagesHome = () => (
  <div id="pages-home" className="container-fluid m-1">
    <header className="text-center border-bottom my-3">
      <h1> Insert company name here</h1>
    </header>

    <div className="d-flex justify-content-around my-3">
      <CardGroup>
        {
          /* FOR LATER!! put the onClick on the Card itself */
          categories.map((cat) => (
            <Card key={cat.id}>
              <Button variant="light" className="button shadow-none" data-cat={cat.name}>
                <Card.Img variant="top" className="cardImage" src={cat.src} />
                <Card.Title className="text text-white">{cat.name}</Card.Title>
              </Button>
            </Card>
          ))
        }
      </CardGroup>
    </div>

    <div>
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
