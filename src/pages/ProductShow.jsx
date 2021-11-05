import React from 'react'
import { Link } from 'react-router-dom'
import CompCarousel from '@/components/Carousel'
import CompProductSelector from '@/components/ProductSelector'

const ProductShow = () => (
  <div id="product-show" className="container">
    <header className="text-center border-bottom">
      <h3>Men's Hats</h3>
      <div><Link to="/products">Back to Men's Hats</Link></div>
    </header>
    <div className="d-flex flex-column d-sm-flex flex-sm-row">

      <CompCarousel />
      <CompProductSelector />
    </div>
  </div>
)

export default ProductShow
