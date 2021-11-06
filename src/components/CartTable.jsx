import React from 'react'
import Table from 'react-bootstrap/Table'
import Image from 'react-bootstrap/Image'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class CartTable extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <div id="ComponentsCartTable" className="container">

        <Table className="text-center mt-3" responsive="md">
          <thead>
            <tr>
              <th colSpan="2" />
              <th>Unit Cost</th>
              <th>Quantity</th>
              <th>Subtotal</th>
              <th />
            </tr>
          </thead>
          <tbody>

            {/* Map this section */}
            <tr>
              <td>
                <Image src="https://i.pinimg.com/736x/4a/91/a6/4a91a6b4f09c7df99a6352db06f7a701.jpg" className="pic-resize" />
              </td>
              <td>ProductName</td>
              <td>$700</td>
              <td>
                <Form>
                  <Form.Control as="select" aria-label="quantity" name="quantity">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </Form.Control>
                </Form>
              </td>
              <td>Subtotal</td>
              <td>
                <div className="fas fa-trash-alt trashBtn"> Remove</div>
              </td>
            </tr>

          </tbody>

          <tbody>
            <tr>
              <td colSpan="3" />
              <td>
                <h4>Total:</h4>
              </td>
              <td>
                <h4>$100.00</h4>
              </td>
              <td>
                <Button variant="success"> Next Step </Button>
              </td>
            </tr>
          </tbody>

        </Table>
      </div>

    )
  }
}

export default CartTable

// Grid version
// <div id="ComponentsCartTable" className="container">

//   <Container className="mt-3 text-center">
//     <Row>
//       <Col />
//       <Col />
//       <Col>
//         <h4>Unit Cost</h4>
//       </Col>
//       <Col>
//         <h4>Quantity</h4>
//       </Col>
//       <Col>
//         <h4>Subtotal</h4>
//       </Col>
//       <Col />
//     </Row>
//     <Row className="d-flex align-items-center my-2">
//       <Col>
//         <Image src="https://i.pinimg.com/736x/4a/91/a6/4a91a6b4f09c7df99a6352db06f7a701.jpg" className="pic-resize" />
//       </Col>
//       <Col>ProductName</Col>
//       <Col>$700</Col>
//       <Col>
//         <Form>
//           <Form.Control as="select" aria-label="quantity" name="quantity">
//             <option value="1">1</option>
//             <option value="2">2</option>
//             <option value="3">3</option>
//             <option value="4">4</option>
//             <option value="5">5</option>
//           </Form.Control>
//         </Form>
//       </Col>
//       <Col>Subtotal</Col>
//       <Col>
//         <div className="fas fa-trash-alt trashBtn"> Remove</div>
//       </Col>
//     </Row>
//     <Row>
//       <Col />
//       <Col />
//       <Col />
//       <Col>
//         <h4>Total:</h4>
//       </Col>
//       <Col>
//         <h4>$100.00</h4>
//       </Col>
//       <Col />

//     </Row>
//   </Container>

// </div>
