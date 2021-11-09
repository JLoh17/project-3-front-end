import axios from 'axios'

import { loading } from '@/actions/loading'

// export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART' //no need this if don't need to temporarily save cart items
// export const addProductToCart = (payload) => ({ type: ADD_PRODUCT_TO_CART, payload })
export const CREATE_CART_ITEM = 'CREATE_CART_ITEM'
export const createCartItem = (values) => (dispatch) => new Promise((resolve, reject) => {
  dispatch(loading(CREATE_CART_ITEM, { loading: true }))
  axios({
    method: 'GET',
    url: `${process.env.API_DOMAIN}/api/my/cart/new`,
    data: values,
    withCredentials: true
  }).then((resp) => {
    // dispatch(addProductToCart(resp.data)) //no need this if don't need to temporarily save cart items
    resolve(resp)
  }).catch((err) => {
    reject(err)
  }).finally(() => {
    dispatch(loading(CREATE_CART_ITEM, { loading: false }))
  })
})

// export const EDIT_PRODUCT_IN_CART = 'EDIT_PRODUCT_IN_CART'
// export const editProductInCart = (payload) => ({ type: EDIT_PRODUCT_IN_CART, payload })
// export const UPDATE_PRODUCT = 'UPDATE_PRODUCT'
// export const updateProduct = (values, OrderId, ProductId) => (dispatch) => new Promise((resolve, reject) => {
//   dispatch(loading(UPDATE_PRODUCT, { loading: true, id: ProductId }))
//   axios({
//     method: 'PUT',
//     url: `${process.env.API_DOMAIN}/api/todos/${OrderId}/todo-items/${ProductId}`,
//     data: values
//   }).then((resp) => {
//     dispatch(editProductInCart(resp.data))
//     resolve(resp)
//   }).catch((err) => {
//     reject(err)
//   }).finally(() => {
//     dispatch(loading(UPDATE_PRODUCT, { loading: false, id: ProductId }))
//   })
// })

// export const REMOVE_PRODUCT_IN_CART = 'REMOVE_PRODUCT_IN_CART'
// export const removeProductInCart = (payload) => ({ type: REMOVE_PRODUCT_IN_CART, payload })
// export const DESTROY_PRODUCT = 'DESTROY_PRODUCT'
// export const destroyTodoItem = (OrderId, ProductId) => (dispatch) => new Promise((resolve, reject) => {
//   dispatch(loading(DESTROY_PRODUCT, { loading: true, id: ProductId }))
//   axios({
//     method: 'DELETE',
//     url: `${process.env.API_DOMAIN}/api/todos/${OrderId}/todo-items/${ProductId}`
//   }).then((resp) => {
//     dispatch(removeProductInCart(ProductId))
//     resolve(resp)
//   }).catch((err) => {
//     reject(err)
//   }).finally(() => {
//     dispatch(loading(DESTROY_PRODUCT, { loading: false, id: ProductId }))
//   })
// })
