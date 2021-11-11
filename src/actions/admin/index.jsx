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

export const EDIT_ADMIN_ORDERSTATUS = 'EDIT_ADMIN_ORDERSTATUS'
export const editAdminOrderStatus = (payload) => ({ type: EDIT_ADMIN_ORDERSTATUS, payload })

export const UPDATE_ADMIN_ORDERSTATUS = 'UPDATE_ADMIN_ORDERSTATUS'
// Refer to handleChange in admin-orders
export const updateAdminOrderStatus = (values, OrderId) => (dispatch) => {
  dispatch(loading(UPDATE_ADMIN_ORDERSTATUS, { loading: true }))
  axios({
    method: 'PUT',
    url: `${process.env.API_DOMAIN}/api/admin/orders/${OrderId}`,
    data: values,
    withCredentials: true
  }).then((resp) => {
    dispatch(editAdminOrderStatus(resp.data))
  }).finally(() => {
    dispatch(loading(UPDATE_ADMIN_ORDERSTATUS, { loading: false }))
  })
}
