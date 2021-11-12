import React, { useEffect } from 'react'
import { withRouter } from 'react-router'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import CompLoading from '@/components/Loading'

import { getMyOrdersShow } from '@/actions/my/orders/show'

const CompPaymentSide = ({ myOrderState: { orderDetails, isLoading }, match, ...props }) => {
  // FOR REFERENCE ONLY - way to get order without using redux/context
  // const [order, setOrder] = useState(null)
  // useEffect(() => {
  //   axios({
  //     method: 'get',
  //     url: `http://localhost:3000/api/my/orders/${match.params.id}`
  //   }).then((resp) => {
  //     setOrder(resp.data.order)
  //   })
  // }, [])

  useEffect(() => {
    props.getMyOrdersShow(match.params.id)
  }, [])

  if (isLoading) {
    return (
      <div className="container my-3">
        <CompLoading />
      </div>
    )
  }

  if (!orderDetails) return <div>There is no such order</div>
  return (
    <div id="comps-checkout-side">
      <h4 className="text-center my-3">Your Order</h4>
      <table className="table table-sm table-bordered">
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
          </tr>
        </thead>

        <tbody>
          {
            orderDetails.OrderProducts.map((item, i) => (
              <tr key={item.id}>
                <td>{i + 1}</td>
                <td>{item.Product.productName}</td>
                <td className="text-right">$ {item.Product.price}</td>
                <td className="text-center">{item.quantity}</td>
                <td className="text-right">$ {item.quantity * item.Product.price}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
      <div className="d-flex justify-content-end p-2">
        <h4><b> Total:</b></h4>
        <span>&nbsp;</span>
        <span><h4><b>$ {orderDetails.OrderProducts.reduce((sum, item) => sum + (item.Product.price * item.quantity), 0)}</b></h4></span>
      </div>
    </div>
  )
}

CompPaymentSide.propTypes = {
  myOrderState: PropTypes.shape().isRequired,
  match: PropTypes.shape().isRequired,
  getMyOrdersShow: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  myOrderState: state.orderShow
})

const mapDispatchToProps = {
  getMyOrdersShow
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CompPaymentSide))
