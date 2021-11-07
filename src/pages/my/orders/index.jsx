import React from 'react'

import SearchSort from '@/components/SearchSort'
import Table from 'react-bootstrap/Table'

class MyOrdersIndex extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      // page: 1,
      // q: '',
      // sort: 'createdAt',
      // status: ''
    }
  }

  render() {
    return (
      <div id="my-orders-index" className="container">
        <header className="text-center my-3">
          <h1>My Orders Index</h1>
        </header>
        <SearchSort className="my-3" />

        <Table className="my-3 text-center">
          <thead>
            <tr>
              <th>Date Ordered</th>
              <th>Order Number</th>
              <th>Total</th>
              <th>Status</th>
              <th />
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="first-row">Order.createdAt</td>
              <td className="first-row">Order.id</td>
              <td className="first-row">Order.grandtotal</td>
              <td className="first-row">Order.status</td>
              <td className="first-row">

                {/* if order.status == "pending payment", show cancel + duplicate order
                otherwise show duplicate order */}
                <span className="fas fa-trash-alt">Cancel</span>
                {/* Do styles.scss margin-left (10px maybe) to separate this button */}
                <span className="fas fa-clone">Duplicate Order</span>
              </td>
            </tr>
          </tbody>
        </Table>

      </div>
    )
  }
}

export default MyOrdersIndex
