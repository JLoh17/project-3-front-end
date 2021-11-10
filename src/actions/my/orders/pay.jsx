import axios from 'axios'

import { loading } from '@/actions/loading'

export const PAY_MY_ORDER = 'PAY_MY_ORDER'
export const payMyOrder = (values) => (dispatch) => new Promise((resolve, reject) => {
  dispatch(loading(PAY_MY_ORDER, { loading: true }))
  axios({
    method: 'PUT',
    url: `${process.env.API_DOMAIN}/api/my/orders/:id/pay`,
    data: values,
    withCredentials: true
  }).then((resp) => {
    resolve(resp)
  }).catch((err) => {
    reject(err)
  }).finally(() => {
    dispatch(loading(PAY_MY_ORDER, { loading: false }))
  })
})
