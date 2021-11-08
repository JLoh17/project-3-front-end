import produce from 'immer'

import {
  // ADD_PRODUCT_TO_CART,
  CREATE_CART_ITEM
} from '@/actions/my/cart/new'

const initialState = {
  myCart: [],
  isLoading: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    // case ADD_PRODUCT_TO_CART: {
    //   return produce(state, (draft) => {
    //     draft.myCart.push(action.payload.newCartItem)
    //   })
    // }
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
