import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Card, ListGroup, ListGroupItem, Button, Form, OverlayTrigger, Popover } from 'react-bootstrap'

import { createCartItem } from '@/actions/my/cart/new'

const CompProductSelector = ({ product, currentUser, ...props }) => {
  const target = useRef(null)
  const [size, setSize] = useState(1)
  const [quantity, setQuantity] = useState(1)
  const [popoverShow, setPopoverShow] = useState(false)
  const [buttonDisable, setButtonDisable] = useState(false)

  const handleAddToCart = (values) => {
    props.createCartItem(values)
  }

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title as="h3">{product.productName}</Card.Title>
        <ListGroup className="list-group-flush">
          <ListGroupItem as="h3">
            {
              product.price.toLocaleString('en-HK', {
                style: 'currency',
                currency: 'HKD'
              })
            }
          </ListGroupItem>

          <ListGroupItem as="h5">
            <Form>
              <Form.Label as="h5">Size</Form.Label>
              <Form.Control onChange={(e) => setSize(e.target.value)} as="select" aria-label="size" name="size">
                <option value="Small">Small</option>
                <option value="Medium">Medium</option>
                <option value="Large">Large</option>
              </Form.Control>
              <Form.Label as="h5" className="mt-2">Quantity</Form.Label>
              <Form.Control onChange={(e) => setQuantity(e.target.value)} as="select" aria-label="quantity" name="quantity">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </Form.Control>
            </Form>
          </ListGroupItem>

          <ListGroupItem />
          <OverlayTrigger
            trigger="click"
            placement="right"
            show={popoverShow}
            overlay={(
              <Popover id="popover-basic">
                <Popover.Title
                  as="h3"
                  style={{
                    // backgroundColor: 'rgb(38, 198, 102)',
                    // padding: '2px 5px',
                    color: 'rgb(38, 198, 102)',
                    borderRadius: 1
                    // border: 'black'
                    // ...props.style
                  }}
                >Item added to Cart!</Popover.Title>
              </Popover>
            )}
          >
            <Button
              disabled={!currentUser || buttonDisable}
              type="button"
              variant="warning"
              ref={target}
              onClick={() => {
                handleAddToCart({ size, quantity, ProductId: product.id })
                setButtonDisable(true)
                setPopoverShow(true)
                setTimeout(() => {
                  setButtonDisable(false)
                  setPopoverShow(false)
                }, 2000)
              }}
            >Add to Cart</Button>
          </OverlayTrigger>
          {
            (!currentUser) && <div className="text-danger">Please Login or Register to add to your Cart</div>
          }

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

  )
}

CompProductSelector.propTypes = {
  product: PropTypes.shape().isRequired,
  currentUser: PropTypes.shape().isRequired,
  createCartItem: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  productShow: state.productShow,
  currentUser: state.currentUser.currentUser
})

const mapDispatchToProps = {
  createCartItem
}

export default connect(mapStateToProps, mapDispatchToProps)(CompProductSelector)
