import React from 'react'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'

import PagesHome from '@/pages/Home'
import ProductIndex from '@/pages/ProductIndex'
import ProductShow from '@/pages/ProductShow'

import MyCart from '@/pages/my/Cart'
import MyProfile from '@/pages/my/Profile'

import MyOrdersShow from '@/pages/my/orders/show'
import MyOrdersNew from '@/pages/my/orders/new'
import MyOrdersIndex from '@/pages/my/orders/'

import PagesNotFound from '@/pages/NotFound'

import AdminOrders from '@/pages/admin/orders'
import Breadcrumb from '@/components/Breadcrumb'
import LayoutsNavbar from './Navbar'

const App = () => (
  <Router>
    <LayoutsNavbar />
    <Breadcrumb />
    <Switch>
      <Route exact path="/" component={PagesHome} />
      <Route exact path="/ProductIndex" component={ProductIndex} />
      <Route exact path="/ProductShow" component={ProductShow} />
      <Route exact path="/my/Cart" component={MyCart} />
      <Route exact path="/my/Profile" component={MyProfile} />
      <Route exact path="/admin/orders" component={AdminOrders} />
      <Route exact path="/my/OrdersShow" component={MyOrdersShow} />
      <Route exact path="/my/OrdersNew" component={MyOrdersNew} />
      <Route exact path="/my/Orders" component={MyOrdersIndex} />
      <Route component={PagesNotFound} />
    </Switch>
  </Router>
)

export default App
