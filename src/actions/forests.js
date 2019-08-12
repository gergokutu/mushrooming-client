import * as request from 'superagent'
import { baseUrl } from '../constants'

export const ALL_FORESTS = 'ALL_FORESTS'

function allForests(payload) {
  return {
    type: ALL_FORESTS,
    payload
  }
}

export const getForests = () => dispatch => {
  request
    .get(`${baseUrl}/forests`)
    .then(response => {
      dispatch(allForests(response.body))
    })
    .catch(console.error)
}  