import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

class SearchSort extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
    }
  }

  render() {
    return (
      <div className="d-flex justify-content-between my-5">
        <Form inline>
          <h4>Search:</h4>
          <Form.Control type="text" placeholder="Search" />
          <Button variant="outline-success" className="ms-3">Search</Button>
        </Form>
        <Form inline>
          <h4>Filter by status:</h4>
          <Form.Control as="select">
            <option defaultChecked>All</option>
            <option>Delivered</option>
            <option>Pending Delivery</option>
            <option>Pending Payment</option>
          </Form.Control>
        </Form>
      </div>
    )
  }
}

export default SearchSort
