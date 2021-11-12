import produce from 'immer'

import {
  SET_MYORDERSINDEX,
  GET_ORDERSINDEX,
  REMOVE_MY_ORDER,
  DESTROY_MY_ORDER
} from '@/actions/my/orders/index'

const initialState = {
  meta: null,
  listOrder: [],
  isLoading: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_MYORDERSINDEX: {
      return produce(state, (draft) => {
        draft.listOrder = action.payload.order
        draft.meta = action.payload.meta
      })
    }
    case GET_ORDERSINDEX: {
      return produce(state, (draft) => {
        draft.isLoading = action.payload.loading
      })
    }
    case REMOVE_MY_ORDER: {
      return produce(state, (draft) => {
        draft.listOrder = action.payload.order
      })
    }
    case DESTROY_MY_ORDER: {
      return produce(state, (draft) => {
        draft.isLoading = action.payload.loading
      })
    }
    default: {
      return state
    }
  }
}
