// Components - Cart Table

import React from 'react'
import Table from 'react-bootstrap/Table'
import Image from 'react-bootstrap/Image'
import Form from 'react-bootstrap/Form'

const CartTable = () => (
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
        </tr>
      </tbody>

    </Table>
  </div>
)

export default CartTable
