import axios from 'axios'

import { loading } from '@/actions/loading'

export const SET_MYORDERSINDEX = 'SET_MYORDERSINDEX'
export const setOrdersIndex = (payload) => ({ type: SET_MYORDERSINDEX, payload })

// Need to do get to set loading, then dispatch the data in setOrdersIndex to store data in the reducer, then dispatch to unset the loading as false
// Connect in pages is needed for dispatch to work
export const GET_ORDERSINDEX = 'GET_ORDERSINDEX'

export const getOrdersIndex = (filter = {}) => (dispatch) => {
  dispatch(loading(GET_ORDERSINDEX, { loading: true }))
  axios({
    method: 'GET',
    url: `${process.env.API_DOMAIN}/api/my/orders`,
    params: filter,
    withCredentials: true // requires this otherwise it won't send
  }).then((resp) => {
    dispatch(setOrdersIndex(resp.data))
  }).finally(() => {
    dispatch(loading(GET_ORDERSINDEX, { loading: false }))
  })
}
