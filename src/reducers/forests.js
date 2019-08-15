import { ALL_FORESTS } from '../actions/forests'
import { FOREST } from '../actions/forests'
import {NEW_FOREST} from '../actions/forests'

const reducer = (state = [], action = {}) => {
  switch (action.type) {
    case ALL_FORESTS:
      return action.payload
    case FOREST:
      return action.payload
    case NEW_FOREST:
      return {state, ...action.payload}
    default:
      return state
  }
}

export default reducer