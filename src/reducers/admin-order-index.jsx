import produce from 'immer'

import {
  SET_MYADMINORDERSINDEX,
  GET_MYADMINORDERSINDEX,
  EDIT_ADMIN_ORDERSTATUS,
  UPDATE_ADMIN_ORDERSTATUS
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
    // ? What to write here
    case EDIT_ADMIN_ORDERSTATUS: {
      return produce(state, (draft) => {
      })
    }
    case UPDATE_ADMIN_ORDERSTATUS: {
      return produce(state, (draft) => {
        draft.isLoading = action.payload.loading
      })
    }
    default: {
      return state
    }
  }
}
