import produce from 'immer'

import {
  SET_MY_CART,
  GET_MY_CART
} from '@/actions/my/cart/index'

import {
  ADD_PRODUCT_TO_CART,
  CREATE_CART_ITEM
} from '@/actions/my/cart/new'

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
    case ADD_PRODUCT_TO_CART: {
      return produce(state, (draft) => {
        draft.cart.push(action.payload.newCartItem)
      })
    }
    case CREATE_CART_ITEM: {
      return produce(state, (draft) => {
        draft.isLoading = action.payload.loading
      })
    }
    default: {
      return state
    }
  }
}
