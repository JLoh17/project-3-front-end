import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import { getMyProfile } from '@/actions/my/profile'

import Breadcrumb from '@/components/Breadcrumb'
import PrivateRoute from '@/components/PrivateRoute'

import LayoutsNavbar from '@/layouts/Navbar'

import PagesHome from '@/pages/Home'

import ProductIndex from '@/pages/ProductIndex'
import ProductShow from '@/pages/ProductShow'

import MyCart from '@/pages/my/Cart'
import MyProfile from '@/pages/my/Profile'

import MyOrdersShow from '@/pages/my/orders/show'
import MyOrdersNew from '@/pages/my/orders/new'
import MyOrdersIndex from '@/pages/my/orders/'

import AdminOrders from '@/pages/admin/orders'

import PagesNotFound from '@/pages/NotFound'

const App = (props) => {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    props.getMyProfile().finally(() => {
      setLoaded(true)
    })
  }, [])

  return (
    <Router>
      {
        loaded ? (
          <>
            <LayoutsNavbar />
            <Breadcrumb />

            <Switch>
              <Route exact path="/" component={PagesHome} />

              <Route exact path="/products" component={ProductIndex} />
              <Route exact path="/products/:id" component={ProductShow} />

              <PrivateRoute exact path="/my/cart" component={MyCart} />
              <PrivateRoute exact path="/my/profile" component={MyProfile} />

              <PrivateRoute exact path="/my/orders" component={MyOrdersIndex} />
              <PrivateRoute exact path="/my/orders/new" component={MyOrdersNew} />
              <PrivateRoute exact path="/my/orders/:id" component={MyOrdersShow} />

              <PrivateRoute exact path="/admin/orders" component={AdminOrders} />

              <Route component={PagesNotFound} />
            </Switch>
          </>
        ) : (
          <div>Loading</div>
        )
      }
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
