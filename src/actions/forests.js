import * as request from 'superagent'
import { baseUrl } from '../constants'

export const ALL_FORESTS = 'ALL_FORESTS'

export function allForests(payload) {
  return {
    type: ALL_FORESTS,
    payload
  }
}

// export function roll(payload) {
//   return{
//     type: 'ROLL',
//     payload
//   }
// }

// export const rollDie = id => dispatch=>
// }

// I should remove this part » because of stream...
//  export const FOREST = 'FOREST'

// function forest(payload) {
//   return {
//     type: FOREST,
//     payload: payload
//   }
// }

// export const getForest = (id) => dispatch => {
//   console.log('f:', id)
//   request
//     .get(`${baseUrl}/roll/${id}`)
//     .then(response => {
//       console.log('forests action response.body:', response.body)
//       dispatch(forest(response.body))
//     })
//     .catch(console.error)
// } 