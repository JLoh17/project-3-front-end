import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import SearchSort from '@/components/SearchSort'
import Table from 'react-bootstrap/Table'

import { getOrdersIndex, destroyMyOrder } from '@/actions/my/orders/index'

class MyOrdersIndex extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      page: 1,
      sort: 'createdAt',
      status: ''
    }

    this.orderShow = this.orderShow.bind(this)
    this.handleDeleteClick = this.handleDeleteClick.bind(this)
  }

  componentDidMount() {
    this.props.getOrdersIndex(this.state)
  }

  // TODO Add action
  handleDeleteClick(orderId) {
    this.props.destroyMyOrder(orderId)
  }

  orderShow(orderId) {
    const { history: { push } } = this.props
    push(`/my/orders/${orderId}`)
  }

  // TODO - Pagination is necessary for my-orders as could have many
  render() {
    const { orderIndex: { listOrder } } = this.props

    return (
      <div id="pages-my-orders-index" className="container my-3">
        <header className="text-center my-3">
          <h1>My Orders Index</h1>
        </header>

        {
          listOrder.length > 0 ? (
            <>
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
                      <tr key={order.id} className="cursor-icon">
                        <td onClick={() => this.orderShow(order.id)}>{order.createdAt.slice(0, 10)}</td>
                        <td onClick={() => this.orderShow(order.id)}>
                          {order.id}</td>
                        <td onClick={() => this.orderShow(order.id)}>
                          {
                            order.grandTotal.toLocaleString('en-HK', {
                              style: 'currency',
                              currency: 'HKD'
                            })
                          }
                        </td>
                        <td onClick={() => this.orderShow(order.id)}>{order.status}</td>
                        <td>
                          {
                            order.status === 'Pending-Payment' ? (
                              <>
                                {/* TODO */}
                                <span className="click-auto fas fa-trash-alt" onClick={() => this.handleDeleteClick()}>Cancel</span>
                                {/* <span className="click-auto fas fa-clone" onClick>Duplicate Order</span> */}
                              </>
                            ) : (
                              // <span className="click-auto fas fa-clone" onClick>Duplicate Order</span>
                              <span />
                            )
                          }
                        </td>
                      </tr>
                    ))
                  }
                </tbody>
              </Table>
            </>
          ) : (
            <h3 className="text-center">No Orders</h3>
          )
        }
      </div>
    )
  }
}

MyOrdersIndex.propTypes = {
  getOrdersIndex: PropTypes.func.isRequired,
  orderIndex: PropTypes.shape().isRequired,
  history: PropTypes.shape().isRequired,
  destroyMyOrder: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  orderIndex: state.orderIndex
})

const mapDispatchToProps = {
  getOrdersIndex,
  destroyMyOrder
}

export default connect(mapStateToProps, mapDispatchToProps)(MyOrdersIndex)
