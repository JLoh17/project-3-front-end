import React from 'react'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'

import PagesHome from '@/pages/Home'
import ProductIndex from '@/pages/ProductIndex'
import ProductShow from '@/pages/ProductShow'
import MyCart from '@/pages/my/Cart'
import MyProfile from '@/pages/my/Profile'
import MyAdminOrders from '@/pages/my/AdminOrders'
import MyOrdersShow from '@/pages/my/OrdersShow'
import MyOrdersIndex from '@/pages/my/OrdersIndex'
import PagesNotFound from '@/pages/NotFound'
import LayoutsNavbar from './Navbar'

const App = () => (
  <Router>
    <LayoutsNavbar />
    <Switch>
      <Route exact path="/" component={PagesHome} />
      <Route exact path="/ProductIndex" component={ProductIndex} />
      <Route exact path="/ProductShow" component={ProductShow} />
      <Route exact path="/my/Cart" component={MyCart} />
      <Route exact path="/my/Profile" component={MyProfile} />
      <Route exact path="/my/AdminOrders" component={MyAdminOrders} />
      <Route exact path="/my/OrdersShow" component={MyOrdersShow} />
      <Route exact path="/my/OrdersIndex" component={MyOrdersIndex} />
      <Route component={PagesNotFound} />
    </Switch>
  </Router>
)

export default App
