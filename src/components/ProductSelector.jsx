import React from 'react'
import { Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'

const CompProductSelector = () => (
  <>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title as="h3">Italia Arpino</Card.Title>
        <ListGroup className="list-group-flush">
          <ListGroupItem as="h3">$600</ListGroupItem>
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
          The Arpino features a herringbone pattern with a windowpane overlay, in rich autumn colors. Fully lined, the Arpino is comfortable and warm, perfect for cooler weather. Top off casual attire with the Italia Arpino, for a sophisticated “town and country” look.
        </Card.Text>
      </Card.Body>
    </Card>
  </>
)

export default CompProductSelector
