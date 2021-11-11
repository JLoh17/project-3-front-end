import React from 'react'
import PropTypes from 'prop-types'
import Card from 'react-bootstrap/Card'
import { connect } from 'react-redux'

import Skeleton from 'react-loading-skeleton'

import { getProductList } from '@/actions/product/index'
import CompsLeftSidebar from '@/components/LeftSideBar'

// functional components cannot use lifecycle hooks
// need to add truncate to className so the title doesn't go too big
// use map list out one by one, then use col-md-3 to restrict it to 4 columns; p-0 fills up the whole card

class ProductIndex extends React.Component {
  constructor(props) {
    super(props)

    const queries = new URLSearchParams(props.location.search)

    this.state = {
      page: 1,
      sort: 'createdAt',
      category: queries.get('catName') || ''
    }

    this.getFiltered = this.getFiltered.bind(this)
    this.getFilteredPage = this.getFilteredPage.bind(this)
    this.productShow = this.productShow.bind(this)
  }

  componentDidMount() {
    this.props.getProductList(this.state)
  }

  componentDidUpdate(prevProps) {
    const oldQueries = new URLSearchParams(prevProps.location.search)
    const newQueries = new URLSearchParams(this.props.location.search)
    if (oldQueries.get('catName') !== newQueries.get('catName')) {
      this.getFiltered()
    }
  }

  getFiltered() {
    const queries = new URLSearchParams(this.props.location.search)
    const newFilter = { ...this.state, category: queries.get('catName'), page: 1 }
    this.props.getProductList(newFilter)
    this.setState(newFilter)
  }

  getFilteredPage(newPage) {
    this.props.getProductList({ ...this.state, page: newPage })
    this.setState({ page: newPage })
  }

  productShow(productId) {
    const { history: { push } } = this.props // redirects to the push on the line below
    push(`/products/${productId}`)
  }

  renderIndex() {
    const { productIndex: { list, meta, isLoading } } = this.props
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
      <div id="product-index-right" className="col-9">
        <div className="row mb-3">
          {
            list.map((product) => (
              <Card
                key={product.id}
                className="col-6 col-md-3 p-0"
                onClick={() => this.productShow(product.id)}
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
            page > 1 && <button type="button" className="btn btn-info btn-spacing" onClick={() => this.getFilteredPage(page - 1)}>Previous</button>
          }
          {
            page < meta?.totalPages && <button type="button" className="btn btn-info" onClick={() => this.getFilteredPage(page + 1)}>Next</button>
          }
        </div>
      </div>
    )
  }

  render() {
    const { productIndex: { meta } } = this.props

    return (
      <div id="pages-product-index" className="container-fluid my-3">
        <header className="text-center mb-3">
          <h1 className="category-title">{meta?.catName || 'Products'}</h1>
        </header>

        <div className="d-flex">
          <CompsLeftSidebar />
          { this.renderIndex()}
        </div>
      </div>
    )
  }
}

ProductIndex.propTypes = {
  getProductList: PropTypes.func.isRequired,
  productIndex: PropTypes.shape().isRequired,
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
