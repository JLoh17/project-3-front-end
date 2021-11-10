import produce from 'immer'

import {
  SET_MY_CART,
  GET_MY_CART
} from '@/actions/my/cart/index'

const initialState = {
  cart: [],
  isLoading: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_MY_CART: {
      return produce(state, (draft) => {
        draft.cart = action.payload.cart
      })
    }
    case GET_MY_CART: {
      return produce(state, (draft) => {
        draft.isLoading = action.payload.loading
      })
    }
    default: {
      return state
    }
  }
}
