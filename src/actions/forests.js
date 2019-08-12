import * as request from 'superagent'
const baseUrl = 'http://localhost:4000'

export const ALL_FORESTS = 'ALL_FORESTS'

function allForests(payload) {
  return {
    type: ALL_FORESTS,
    payload
  }
}

export const getForests = () => dispatch => {
  request
    .get(`${baseUrl}/ads`)
    .then(response => {
      dispatch(allForests(response.body))
    })
    .catch(console.error)
}  