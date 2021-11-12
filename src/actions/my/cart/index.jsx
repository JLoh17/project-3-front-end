import axios from 'axios'

import { loading } from '@/actions/loading'

export const SET_MY_CART = 'SET_MY_CART'
export const setMyCart = (payload) => ({ type: SET_MY_CART, payload })
export const UNSET_MY_CART = 'UNSET_MY_CART'
export const unsetMyCart = () => ({ type: UNSET_MY_CART })

// Need to do get to set loading, then dispatch the data in setMyCart to store data in the reducer, then dispatch to unset the loading as false
// Connect in pages is needed for dispatch to work
export const GET_MY_CART = 'GET_MY_CART'

export const getMyCart = () => (dispatch) => {
  dispatch(loading(GET_MY_CART, { loading: true }))
  axios({
    method: 'GET',
    url: `${process.env.API_DOMAIN}/api/my/cart`,
    params: '',
    withCredentials: true // requires this otherwise it won't send
  }).then((resp) => {
    dispatch(setMyCart(resp.data))
  }).finally(() => {
    dispatch(loading(GET_MY_CART, { loading: false }))
  })
}

export const EDIT_CART_QUANTITY = 'EDIT_CART_QUANTITY'
export const editCartQuantity = (payload) => ({ type: EDIT_CART_QUANTITY, payload })

export const UPDATE_CART_QUANTITY = 'UPDATE_CART_QUANTITY'
export const updateCartQuantity = (values, CartId) => (dispatch) => {
  dispatch(loading(UPDATE_CART_QUANTITY, { loading: true }))
  axios({
    method: 'PUT',
    url: `${process.env.API_DOMAIN}/api/my/cart/${CartId}`,
    data: values,
    withCredentials: true
  }).then((resp) => {
    dispatch(editCartQuantity(resp.data))
  }).finally(() => {
    dispatch(loading(UPDATE_CART_QUANTITY, { loading: false }))
  })
}

export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM'
export const removeCartItem = (payload) => ({ type: REMOVE_CART_ITEM, payload })
export const DESTROY_CART_ITEM = 'DESTROY_CART_ITEM'
export const destroyCartItem = (CartId) => (dispatch) => new Promise((resolve, reject) => {
  dispatch(loading(DESTROY_CART_ITEM, { loading: true }))
  axios({
    method: 'DELETE',
    url: `${process.env.API_DOMAIN}/api/my/cart/${CartId}`,
    withCredentials: true
  }).then((resp) => {
    dispatch(removeCartItem(CartId))
    resolve(resp)
  }).catch((err) => {
    reject(err)
  }).finally(() => {
    dispatch(loading(DESTROY_CART_ITEM, { loading: false, id: CartId }))
  })
})
