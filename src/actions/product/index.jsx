// import axios from 'axios'

// import { loading } from '@/actions/loading'

// // export const DDDD = 'DDDD'
// // export const CCCC = (payload) => ({ type: DDDD, payload })
// export const GET_PRODUCTLIST = 'GET_PRODUCTLIST' // when sending a payload, need to to be a string
// export const getProductList = () => (dispatch) => {
//   dispatch(loading(GET_PRODUCTLIST, { loading: true }))
//   axios({
//     method: 'GET',
//     url: 'https://localhost:3000/products'
//   // }).then((resp) => {
//   //   dispatch(CCCC(resp.data))
//   }).finally(() => {
//     dispatch(loading(GET_PRODUCTLIST, { loading: false }))
//   })
// }
