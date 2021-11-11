import produce from 'immer'

import {
  SET_MY_CART,
  GET_MY_CART,
  EDIT_CART_QUANTITY,
  UPDATE_CART_QUANTITY,
  REMOVE_CART_ITEM,
  DESTROY_CART_ITEM
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
    case EDIT_CART_QUANTITY: {
      return produce(state, (draft) => {
        const index = draft.cart.findIndex((cart) => cart.id === action.payload.cart.id) // need to use id as we are targeting a specific cart
        if (index !== -1) draft.cart[index].quantity = action.payload.cart.quantity // if we do not add .quantity, then when we change the quantity everything inside the id will be reset. Adding .quantity will ensure only the quantity changes.
      })
    }
    case UPDATE_CART_QUANTITY: {
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
    case REMOVE_CART_ITEM: {
      return produce(state, (draft) => {
        const index = draft.cart.findIndex((cart) => cart.id === action.payload.cart.id)
        if (index !== -1) draft.cart[index].splice(index, 1)
      })
    }
    case DESTROY_CART_ITEM: {
      return produce(state, (draft) => {
        draft.isLoading = action.payload.loading
      })
    }

    default: {
      return state
    }
  }
}
