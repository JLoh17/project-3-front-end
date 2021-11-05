import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import ReducersCurrentUser from '@/reducers/current-user'
import ReducersProductIndex from '@/reducers/product-index'

const createReducersRoot = (history) => combineReducers({
  currentUser: ReducersCurrentUser,
  productIndex: ReducersProductIndex,
  router: connectRouter(history)
})

export default createReducersRoot
