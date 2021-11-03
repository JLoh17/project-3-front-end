import produce from 'immer'

import {
  getProductList
} from '@/actions/product/'

const initialState = {

}

export default (state = initialState, action) => {
  switch (action.type) {
    case getProductList: {
      return produce(state, (draft) => {
        draft.isLoading = action.payload.loading
      })
    }
    default: {
      return state
    }
  }
}
