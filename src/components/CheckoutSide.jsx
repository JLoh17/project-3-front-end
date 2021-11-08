import React from 'react'
import PropTypes from 'prop-types'

const CompCheckoutSide = () => (

  <table className="table table-sm table-bordered">
    <thead>
      <tr>
        <th colSpan="5"><h4 className="text-center">Your Cart</h4></th>

      </tr>

      <tr>
        <th>#</th>
        <th>Product Name</th>
        <th>Unit Cost</th>
        <th>Quantity</th>
        <th>Subtotal</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Hat</td>
        <td>250</td>
        <td>2</td>
        <td>500</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Shirt</td>
        <td>100</td>
        <td>1</td>
        <td>100</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Shoes</td>
        <td>300</td>
        <td>1</td>
        <td>300</td>
      </tr>
      <tr>
        <th colSpan="4"><h4 className="text-right">Total</h4></th>
        <td><h4>$900</h4></td>

      </tr>
    </tbody>
  </table>

)
// CompCheckoutSide.propTypes = {
//   product: PropTypes.shape().isRequired

// }

export default CompCheckoutSide
