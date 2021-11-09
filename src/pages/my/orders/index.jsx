import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import SearchSort from '@/components/SearchSort'
import Table from 'react-bootstrap/Table'

import { getOrdersIndex } from '@/actions/my/orders/index'

class MyOrdersIndex extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      page: 1,
      sort: 'createdAt',
      status: ''
    }

    this.orderShow = this.orderShow.bind(this)
  }

  componentDidMount() {
    this.props.getOrdersIndex(this.state)
  }

  orderShow(orderId) {
    const { history: { push } } = this.props
    push(`/my/orders/${orderId}`)
  }

  render() {
    const { orderIndex: { listOrder, meta, isLoading } } = this.props

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
            {
            listOrder.map((order) => (
              <tr className="cursor-icon">
                <td onClick={() => this.orderShow(order.id)}>{order.createdAt.slice(0, 10)}</td>
                <td onClick={() => this.orderShow(order.id)}>
                  {order.id}</td>
                <td onClick={() => this.orderShow(order.id)}>{order.grandTotal.toLocaleString('en-HK', {
                  style: 'currency',
                  currency: 'HKD' })}</td>
                <td onClick={() => this.orderShow(order.id)}>{order.status}</td>
                {/* pointEvent stops this from being click under the table row */}
                {/* Remove this and put it in style */}
                <td>
                  {
                    order.status === 'Pending Payment' ? (
                      <>
                        <span className="click-auto fas fa-trash-alt" onClick>Cancel</span>
                        <span className="click-auto fas fa-clone" onClick>Duplicate Order</span>
                      </>
                    ) : (
                      <span className="click-auto fas fa-clone" onClick>Duplicate Order</span>
                    )
                  }
                </td>
              </tr>
            ))

          }
          </tbody>
        </Table>

      </div>
    )
  }
}

MyOrdersIndex.propTypes = {
  getOrdersIndex: PropTypes.func.isRequired,
  orderIndex: PropTypes.func.isRequired,
  history: PropTypes.shape().isRequired

}

const mapStateToProps = (state) => ({
  orderIndex: state.orderIndex
})

const mapDispatchToProps = {
  getOrdersIndex
}

export default connect(mapStateToProps, mapDispatchToProps)(MyOrdersIndex)
