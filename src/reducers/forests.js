import { ALL_FORESTS } from '../actions/forests'

const reducer = (state = [], action = {}) => {
  switch (action.type) {
  case ALL_FORESTS:
    return action.payload
  default:
    return state
  }
}

export default reducer