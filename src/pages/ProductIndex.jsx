import React from 'react'
import PropTypes from 'prop-types'
import Card from 'react-bootstrap/Card'
import { connect } from 'react-redux'

import Footer from '@/components/Footer'

import Skeleton from 'react-loading-skeleton'


import { getProductList } from '@/actions/product/index'

// functional components cannot use lifecycle hooks
// need to add truncate to className so the title doesn't go too big
// use map list out one by one, then use col-md-3 to restrict it to 4 columns; p-0 fills up the whole card

class ProductIndex extends React.Component {
  constructor(props) {
    super(props)

    const queries = new URLSearchParams(props.location.search)

    this.state = {
      page: 1,
      q: '',
      sort: 'createdAt',
      category: queries.get('catName') || ''
    }

    this.getFilteredProductsPrevious = this.getFilteredProductsPrevious.bind(this)
    this.getFilteredProductsNext = this.getFilteredProductsNext.bind(this)
  }

  componentDidMount() {
    this.props.getProductList(this.state)
  }

  getFilteredCategory(newCategory) {
    this.props.getProductList(this.state)
    this.setState({ category: newCategory })
  }

  getFilteredProductsNext(newPage) {
    this.props.getProductList({ ...this.state, page: newPage })
    this.setState({ page: newPage })
  }

  getFilteredProductsPrevious(newPage) {
    this.props.getProductList({ ...this.state, page: newPage })
    this.setState({ page: newPage })
  }

  renderIndex() {
    const { productIndex: { list, meta, isLoading }, history: { push } } = this.props
    const { page } = this.state

    if (isLoading) {
      const temp = Array.from(Array(12).keys())

      return (
        <div className="row mb-3">
          {
            temp.map((t) => (
              <Card key={t} className="col-6 col-md-3 p-0">
                <Skeleton className="card-img-top" />
                <Card.Body>
                  <Skeleton count={2} />
                </Card.Body>
              </Card>
            ))
          }
        </div>
      )
    }

    return (
      <>
        <div className="row mb-3">
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

        <div className="d-flex justify-content-center">
          {
            page > 1 && <button type="button" className="btn btn-info btn-spacing" onClick={() => this.getFilteredProductsPrevious(page - 1)}>Previous</button>
          }
          {
            page < meta?.totalPages && <button type="button" className="btn btn-info" onClick={() => this.getFilteredProductsNext(page + 1)}>Next</button>
          }
        </div>
      </>
    )
  }

  render() {
    // const { productIndex: { list, product } = this.props
    return (

      <>
        <div id="product-index" className="container">
          <header className="text-center mb-3">
            <h1>Category</h1>
          </header>

          { this.renderIndex()}
        </div>
        <Footer />
      </>


    )
  }
}

ProductIndex.propTypes = {
  getProductList: PropTypes.func.isRequired,
  productIndex: PropTypes.func.isRequired,
  history: PropTypes.shape().isRequired,
  location: PropTypes.shape().isRequired
}

const mapStateToProps = (state) => ({
  productIndex: state.productIndex
})

const mapDispatchToProps = {
  getProductList
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductIndex)
// Need mapStateToProps and mapDispatchToProps in order for the dispatch in the actions to work
