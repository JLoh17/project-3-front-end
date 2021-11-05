import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import { getMyProfile } from '@/actions/my/profile'

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

const App = (props) => {
  useEffect(() => {
    props.getMyProfile()
  }, [])

  return (
    <Router>
      <LayoutsNavbar />
      <Breadcrumb />

      <Switch>
        <Route exact path="/" component={PagesHome} />

        <Route exact path="/products" component={ProductIndex} />
        <Route exact path="/products/:id" component={ProductShow} />

        <Route exact path="/my/cart" component={MyCart} />
        <Route exact path="/my/profile" component={MyProfile} />
        <Route exact path="/my/orders" component={MyOrdersIndex} />
        <Route exact path="/my/orders/new" component={MyOrdersNew} />
        <Route exact path="/my/orders/:id" component={MyOrdersShow} />

        <Route exact path="/admin/orders" component={AdminOrders} />
        <Route component={PagesNotFound} />
      </Switch>
    </Router>
  )
}

App.propTypes = {
  getMyProfile: PropTypes.func.isRequired
}

const mapDispatchToProps = {
  getMyProfile
}

export default connect(null, mapDispatchToProps)(App)
