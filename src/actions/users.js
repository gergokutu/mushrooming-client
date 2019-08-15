import * as request from 'superagent'
import { baseUrl } from '../constants'

export const JWT = 'JWT'

function jwt (payload) {
  return {
    type: JWT,
    payload
  }
}

export const loginUser = (email, password) => dispatch => {
  console.log('loginUser:', email, password)
  request
    .post(`${baseUrl}/login`)
    .send({ email, password })
    .then(response => {
      console.log('HellloQ')
      const action = jwt(response.body)
      dispatch(action)
    }
  )
}

export const createUser = (user) => dispatch => {
  console.log('createUser:', user)
  request
    .post(`${baseUrl}/user`)
    .send(user)
    .then(response => {
      console.log("response test:", response)
    })
    .catch(console.error)
}

