import axios from 'axios'

import { loading } from '@/actions/loading'

export const CREATE_MY_ORDER = 'CREATE_MY_ORDER'
export const createMyOrder = (values) => (dispatch) => new Promise((resolve, reject) => {
  dispatch(loading(CREATE_MY_ORDER, { loading: true }))
  axios({
    method: 'POST',
    url: `${process.env.API_DOMAIN}/api/my/orders`,
    data: values,
    withCredentials: true
  }).then((resp) => {
    resolve(resp)
  }).catch((err) => {
    reject(err)
  }).finally(() => {
    dispatch(loading(CREATE_MY_ORDER, { loading: false }))
  })
})
