import * as request from 'superagent'
import { baseUrl } from '../constants'

export const LOGIN_USER = 'LOGIN_USER'

function existingUser(payload) {
  return {
    type: LOGIN_USER,
    payload
  }
}

export const loginUser = (id) => dispatch => {
  request
    .get(`${baseUrl}/login/${id}`)
    .then(response => {
      dispatch(existingUser(response.body))
    })
    .catch(console.error)
}


export const CREATE_USER = 'CREATE_USER'

function newUser(payload) {
  return {
    type: CREATE_USER,
    payload
  }
}

export const createUser = () => dispatch => {
  request
    .get(`${baseUrl}/user`)
    .then(response => {
      dispatch(newUser(response.body))
    })
    .catch(console.error)
}

