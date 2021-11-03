import axios from 'axios'

import { loading } from '@/actions/loading'

export const XXX = 'XXX'
export const destroyMyTodo = (TodoId) => (dispatch) => new Promise((resolve, reject) => {
  dispatch(loading(XXX, { loading: true, id: TodoId }))
  axios({
    method: 'GET',
    url: `https://localhost:3000/products,
  }).then((resp) => {
    dispatch(removeTodoInMyTodos(TodoId))
    resolve(resp)
  }).catch((err) => {
    reject(err)
  }).finally(() => {
    dispatch(loading(DESTROY_MY_TODO, { loading: false, id: TodoId }))
  })
})

//Redux
export const GET_MY_TODO = 'GET_MY_TODO'
export const getMyTodo = (TodoId) => (dispatch) => {
  dispatch(loading(GET_MY_TODO, { loading: true }))
  axios({
    method: 'GET',
    url: `https://fswdi-api-auth-todos.herokuapp.com/api/my/todos/${TodoId}`,
    withCredentials: true
  }).then((resp) => {
    dispatch(setMyTodo(resp.data))
  }).finally(() => {
    dispatch(loading(GET_MY_TODO, { loading: false }))
  })
}
