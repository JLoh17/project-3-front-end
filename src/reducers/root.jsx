import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import ReducersCurrentUser from '@/reducers/current-user'
import ReducersProductIndex from '@/reducers/product-index'
import ReducersProductShow from '@/reducers/product-show'

const createReducersRoot = (history) => combineReducers({
  currentUser: ReducersCurrentUser,
  productIndex: ReducersProductIndex,
  productShow: ReducersProductShow,
  router: connectRouter(history)
})

export default createReducersRoot
