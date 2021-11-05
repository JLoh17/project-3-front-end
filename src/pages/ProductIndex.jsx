import React from 'react'
import PropTypes from 'prop-types'
import Card from 'react-bootstrap/Card'
import { connect } from 'react-redux'

import { getProductList } from '@/actions/product/index'

// functional components cannot use lifecycle hooks
// need to add truncate to className so the title doesn't go too big
// use map list out one by one, then use col-md-3 to restrict it to 4 columns; p-0 fills up the whole card

class ProductIndex extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
    }

    // this.productShow = this.productShow.bind(this)
  }

  componentDidMount() {
    this.props.getProductList()
  }

  renderIndex() {
    const { productIndex: { list } } = this.props

    return (
      <div className="row">
        {
          list.map((product) => (
            <Card
              key={product.id}
              className="col-6 col-md-3 p-0"
              onClick={this.productShow}
            >
              <Card.Img variant="top" src={product.Images?.[0]?.imageURL} />
              <Card.Body>
                <Card.Title>{product.productName}</Card.Title>
                <Card.Text>{product.price.toLocaleString('en-HK', {
                  style: 'currency',
                  currency: 'HKD'
                })}</Card.Text>
              </Card.Body>
            </Card>
          ))
        }

      </div>
    )
  }

  render() {
    return (
      <div id="product-index" className="container">
        <header className="text-center mb-3">
          <h1>Category</h1>
        </header>
        { this.renderIndex()}
      </div>
    )
  }
}

ProductIndex.propTypes = {
  getProductList: PropTypes.func.isRequired,
  productIndex: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  productIndex: state.productIndex
})

const mapDispatchToProps = {
  getProductList
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductIndex)
// Need mapStateToProps and mapDispatchToProps in order for the dispatch in the actions to work
