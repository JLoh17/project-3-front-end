import React from 'react'
import PropTypes from 'prop-types'
import { Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'

const CompProductSelector = ({ product }) => (
  <>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title as="h3">{product.productName}</Card.Title>
        <ListGroup className="list-group-flush">
          <ListGroupItem as="h3">{product.price.toLocaleString('en-HK', {
            style: 'currency',
            currency: 'HKD'
          })}</ListGroupItem>
          <ListGroupItem as="h5">
            <Form>
              <Form.Label as="h5">Size</Form.Label>
              <Form.Control as="select" aria-label="size" name="size">
                <option value="1">Small</option>
                <option value="2">Medium</option>
                <option value="3">Large</option>
              </Form.Control>
              <Form.Label as="h5" className="mt-2">Quantity</Form.Label>
              <Form.Control as="select" aria-label="quantity" name="quantity">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </Form.Control>
            </Form>
          </ListGroupItem>
          <ListGroupItem />
          <Button type="submit" variant="warning">Add to Cart</Button>
          <ListGroupItem />

        </ListGroup>
        <Card.Text as="h5">
          Description
        </Card.Text>

        <Card.Text>
          {product.description}
        </Card.Text>
      </Card.Body>
    </Card>
  </>
)

CompProductSelector.propTypes = {
  product: PropTypes.shape().isRequired

}

export default CompProductSelector
