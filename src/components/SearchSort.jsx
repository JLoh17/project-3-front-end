import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class SearchSort extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
    }
  }

  render() {
    return (
      <Container id="SearchSort" className="my-5">
        <Row>
          <Col>
            <Form inline>
              <h4>Search:</h4>
              <Form.Control type="text" placeholder="Search" className="btn-spacing" />
              <Button variant="outline-success" className="btn-spacing">Search</Button>
            </Form>
          </Col>
          <Col className="col-auto">
            <Form inline>
              <h4>Filter by status:</h4>
              <Form.Control as="select" className="btn-spacing">
                <option defaultChecked>All</option>
                <option>Delivered</option>
                <option>Pending Delivery</option>
                <option>Pending Payment</option>
              </Form.Control>
            </Form>
          </Col>
        </Row>
      </Container>

    // <div id="SearchSort" className="d-flex justify-content-between my-5">
    //   <Form inline>
    //     <h4>Search:</h4>
    //     <Form.Control type="text" placeholder="Search" className="btn-spacing" />
    //     <Button variant="outline-success" className="btn-spacing">Search</Button>
    //   </Form>
    //   <Form inline>
    //     <h4>Filter by status:</h4>
    //     <Form.Control as="select" className="btn-spacing">
    //       <option defaultChecked>All</option>
    //       <option>Delivered</option>
    //       <option>Pending Delivery</option>
    //       <option>Pending Payment</option>
    //     </Form.Control>
    //   </Form>
    // </div>
    )
  }
}

export default SearchSort
