import { JWT } from '../actions/login'

export default function (state = '', action = {}) {
  switch (action.type) {
    case JWT:
      return action.payload
    default:
      return state
  }
}

// import { LOGIN_USER } from '../actions/users'
// import { CREATE_USER } from '../actions/users'

export default function (state = [], action = {}) {
  switch (action.type) {
    case LOGIN_USER:
      return action.payload
    case CREATE_USER:
      return action.payload
    default:
      return state
  }
}

// export default reducer