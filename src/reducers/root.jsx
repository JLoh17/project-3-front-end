import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import ReducersCurrentUser from '@/reducers/my/current-user'
import ReducersProductIndex from '@/reducers/product/product-index'
import ReducersProductShow from '@/reducers/product/product-show'
import ReducersOrderIndex from '@/reducers/my/orders/order-index'
import ReducersAdminOrderIndex from '@/reducers/admin/admin-order-index'
import ReducersMyCart from '@/reducers/my/cart/my-cart'
import ReducersOrderNew from '@/reducers/my/orders/order-new'
import ReducersOrderShow from '@/reducers/my/orders/order-show'

const createReducersRoot = (history) => combineReducers({
  currentUser: ReducersCurrentUser,
  productIndex: ReducersProductIndex,
  productShow: ReducersProductShow,
  orderIndex: ReducersOrderIndex,
  adminOrderIndex: ReducersAdminOrderIndex,
  myCart: ReducersMyCart,
  orderNew: ReducersOrderNew,
  orderShow: ReducersOrderShow,
  router: connectRouter(history)
})

export default createReducersRoot
