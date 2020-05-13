import * as request from 'superagent'
import { baseUrl } from '../constants'

export const JWT = 'JWT'

function jwt(payload) {
  return {
    type: JWT,
    payload
  }
}

export const loginUser = (email, password) => dispatch => {
  request
    .post(`${baseUrl}/login`)
    .send({ email, password })
    .then(response => {
      const action = jwt(response.body)
      dispatch(action)
    })
}

export const createUser = (user) => dispatch => {
  request
    .post(`${baseUrl}/user`)
    .send(user)
    .then(response => {
      console.log("response", response)
    })
    .catch(console.error)
}