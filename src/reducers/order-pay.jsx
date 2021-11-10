import produce from 'immer'

import {
  PAY_MY_ORDER
} from '@/actions/my/orders/pay'

const initialState = {
  orderDetails: [],
  isLoading: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case PAY_MY_ORDER: {
      return produce(state, (draft) => {
        draft.orderDetails = action.payload.order
      })
    }
    default: {
      return state
    }
  }
}
