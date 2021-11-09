import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import CompCarousel from '@/components/Carousel'
import Footer from '@/components/Footer'
import CompProductSelector from '@/components/ProductSelector'
import CompLoading from '@/components/Loading'

import { getProductShow } from '@/actions/product/show'

const ProductShow = (props) => {
  useEffect(() => {
    const { match: { params } } = props
    props.getProductShow(params.id)
  }, [])

  const { productShow: { product, isLoading }, currentUser } = props

  if (isLoading) {
    return (
      <div className="container my-3">
        <CompLoading />
      </div>
    )
  }

  if (!product) return null

  return (
    <>
      <div id="product-show" className="container my-3">
        <header className="text-center border-bottom">
          <h3>{product.Category.catName}</h3>
          <div><Link to={`/products?catName=${product.Category.id}`}>Back to {product.Category.catName}</Link></div>
        </header>
        <div className="d-flex">
          <CompCarousel images={product.Images} />
          <CompProductSelector product={product} currentUser={currentUser} />
        </div>
      </div>
      <Footer />
    </>
  )
}

ProductShow.propTypes = {
  getProductShow: PropTypes.func.isRequired,
  match: PropTypes.shape().isRequired,
  productShow: PropTypes.shape().isRequired,
  currentUser: PropTypes.shape().isRequired
}

const mapStateToProps = (state) => ({
  productShow: state.productShow,
  currentUser: state.currentUser.currentUser
})

const mapDispatchToProps = {
  getProductShow
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductShow)
