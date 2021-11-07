import React from 'react'

import SearchSort from '@/components/SearchSort'
import Table from 'react-bootstrap/Table'

class MyOrdersIndex extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
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
                <span className="fas fa-trash-alt">Cancel</span>
                {/* Do styles.scss margin-left (10px maybe) to separate this button */}
                <span className="fas fa-clone">Duplicate Order</span>
              </td>
            </tr>
            <tr>
              <td className="first-row">12 October 2021</td>
              <td className="first-row">Order #</td>
              <td className="first-row">1,400</td>
              <td className="first-row">Delivered</td>
              <td className="first-row">
                <span className="fas fa-trash-alt">Cancel</span>
                {/* Do styles.scss margin-left (10px maybe) to separate this button */}
                <span className="fas fa-clone">Duplicate Order</span>
              </td>
            </tr>
            <tr>
              <td className="first-row">12 October 2021</td>
              <td className="first-row">Order #</td>
              <td className="first-row">1,400</td>
              <td className="first-row">Delivered</td>
              <td className="first-row">
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
