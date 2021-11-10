import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import ReducersCurrentUser from '@/reducers/current-user'
import ReducersProductIndex from '@/reducers/product-index'
import ReducersProductShow from '@/reducers/product-show'
import ReducersOrderIndex from '@/reducers/order-index'
import ReducersAdminOrderIndex from '@/reducers/admin-order-index'
import ReducersMyCart from '@/reducers/my-cart'
import ReducersOrderNew from '@/reducers/order-new'

const createReducersRoot = (history) => combineReducers({
  currentUser: ReducersCurrentUser,
  productIndex: ReducersProductIndex,
  productShow: ReducersProductShow,
  orderIndex: ReducersOrderIndex,
  adminOrderIndex: ReducersAdminOrderIndex,
  myCart: ReducersMyCart,
  orderNew: ReducersOrderNew,
  router: connectRouter(history)
})

export default createReducersRoot
