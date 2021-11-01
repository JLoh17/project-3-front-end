import React from 'react'
import { Link } from 'react-router-dom'

const ProductShow = () => (
  <div id="product-show" className="container">
    <header className="text-center border-bottom">
      <h1>Product Show</h1>
      <div><Link to="/ProductIndex">Product Index</Link></div>
    </header>
  </div>
)

export default ProductShow
