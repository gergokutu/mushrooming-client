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
  request
    .post(`${baseUrl}/login`)
    .send({ email, password })
    .then(response => {
      const action = jwt(response.body.jwt)

      dispatch(action)
    })
}

// export const CREATE_USER = 'CREATE_USER'

// function newUser(payload) {
//   return {
//     type: CREATE_USER,
//     payload
//   }
// }

// export const createUser = () => dispatch => {
//   request
//     .post(`${baseUrl}/user`)
//     .then(response => {
//       dispatch(newUser(response.body))
//     })
//     .catch(console.error)
// }

