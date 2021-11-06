import React from 'react'
import { Link } from 'react-router-dom'

import SearchSort from '@/components/SearchSort'

const AdminOrders = () => (
  <div id="admin-orders" className="container">
    <header className="text-center border-bottom">
      <h1>My Admin Orders</h1>
      <div><Link to="/">Home Page</Link></div>
    </header>
    <SearchSort />
  </div>
)

export default AdminOrders
