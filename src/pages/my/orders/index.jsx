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
  }

  componentDidMount() {
    this.props.getOrdersIndex(this.state)
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
              <tr>
                <td>{order.createdAt.slice(0, 10)}</td>
                <td>{order.id}</td>
                <td>{order.grandTotal}</td>
                <td>{order.status}</td>
                <td>
                  {
                  order.status === 'Pending Payment' ? (
                    <>
                      <span className="fas fa-trash-alt">Cancel</span>
                      <span className="fas fa-clone">Duplicate Order</span>
                    </>
                  ) : (
                    <span className="fas fa-clone">Duplicate Order</span>
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
  orderIndex: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  orderIndex: state.orderIndex
})

const mapDispatchToProps = {
  getOrdersIndex
}

export default connect(mapStateToProps, mapDispatchToProps)(MyOrdersIndex)
