import axios from 'axios'

import { loading } from '@/actions/loading'

export const SET_PRODUCTLIST = 'SET_PRODUCTLIST'
export const setProductList = (payload) => ({ type: SET_PRODUCTLIST, payload })

// Need to do get to set loading, then dispatch the data in setProductList to store data in the reducer, then dispatch to unset the loading as false
// Connect in pages is needed for dispatch to work
export const GET_PRODUCTLIST = 'GET_PRODUCTLIST'
export const getProductList = (filter = {}) => (dispatch) => {
  dispatch(loading(GET_PRODUCTLIST, { loading: true }))
  axios({
    method: 'GET',
    url: 'http://localhost:3000/api/products',
    params: filter
  }).then((resp) => {
    dispatch(setProductList(resp.data))
  }).finally(() => {
    dispatch(loading(GET_PRODUCTLIST, { loading: false }))
  })
}
