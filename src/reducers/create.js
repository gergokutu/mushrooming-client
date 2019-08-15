import { CREATE_USER } from '../actions/users'

export default function (state = [], action = {}) {
  switch (action.type) {
    case CREATE_USER:
      return action.payload
    default:
      return state
  }
}