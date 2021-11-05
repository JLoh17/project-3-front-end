import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { getProductShow } from '@/actions/product/show'

import CompCarousel from '@/components/Carousel'
import CompProductSelector from '@/components/ProductSelector'
import CompLoading from '@/components/Loading'

const ProductShow = (props) => {
  useEffect(() => {
    const { match: { params } } = props
    props.getProductShow(params.id)
  }, [])

  const { productShow: { product, isLoading } } = props

  if (isLoading) {
    return (
      <div className="container my-3">
        <CompLoading />
      </div>
    )
  }

  if (!product) return null

  return (
    <div id="product-show" className="container my-3">
      <header className="text-center border-bottom">
        <h3>{product.Category.catName}</h3>
        <div><Link to="/products">Back to {product.Category.catName}</Link></div>
      </header>
      <div className="d-flex">

        <CompCarousel images={product.Images} />
        <CompProductSelector product={product} />
      </div>
    </div>
  )
}

ProductShow.propTypes = {
  getProductShow: PropTypes.func.isRequired,
  match: PropTypes.shape().isRequired,
  productShow: PropTypes.shape().isRequired
}

const mapStateToProps = (state) => ({
  productShow: state.productShow
})

const mapDispatchToProps = {
  getProductShow
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductShow)
