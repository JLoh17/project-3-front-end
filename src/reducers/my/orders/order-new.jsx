import produce from 'immer'

import {
  CREATE_MY_ORDER
} from '@/actions/my/orders/new'

const initialState = {
  orderDetails: [],
  isLoading: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_MY_ORDER: {
      return produce(state, (draft) => {
        draft.orderDetails = action.payload.order
      })
    }
    default: {
      return state
    }
  }
}
