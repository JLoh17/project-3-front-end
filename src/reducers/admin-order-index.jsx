import produce from 'immer'

import {
  SET_MYADMINORDERSINDEX,
  GET_MYADMINORDERSINDEX
} from '@/actions/admin/index'

const initialState = {
  meta: null,
  listAdminOrder: [],
  isLoading: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_MYADMINORDERSINDEX: {
      return produce(state, (draft) => {
        draft.listAdminOrder = action.payload.orders
        draft.meta = action.payload.meta
      })
    }
    case GET_MYADMINORDERSINDEX: {
      return produce(state, (draft) => {
        draft.isLoading = action.payload.loading
      })
    }
    default: {
      return state
    }
  }
}
