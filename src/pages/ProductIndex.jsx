import React from 'react'
import { Link } from 'react-router-dom'

const ProductIndex = () => (
  <div id="product-index" className="container">
    <header className="text-center border-bottom">
      <h1>Product Index</h1>
      <div><Link to="/">Home Page</Link></div>
      <div><Link to="/ProductShow">Product Show</Link></div>
    </header>
  </div>
)

export default ProductIndex
