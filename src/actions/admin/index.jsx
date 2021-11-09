import axios from 'axios'

import { loading } from '@/actions/loading'

export const SET_MYADMINORDERSINDEX = 'SET_MYADMINORDERSINDEX'
export const setAdminOrdersIndex = (payload) => ({ type: SET_MYADMINORDERSINDEX, payload })

export const GET_MYADMINORDERSINDEX = 'GET_MYADMINORDERSINDEX'

export const getAdminOrdersIndex = (filter = {}) => (dispatch) => {
  dispatch(loading(GET_MYADMINORDERSINDEX, { loading: true }))
  axios({
    method: 'GET',
    url: `${process.env.API_DOMAIN}/api/admin/orders`,
    params: filter,
    withCredentials: true
  }).then((resp) => {
    dispatch(setAdminOrdersIndex(resp.data))
  }).finally(() => {
    dispatch(loading(GET_MYADMINORDERSINDEX, { loading: false }))
  })
}
