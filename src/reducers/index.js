import { combineReducers } from 'redux'
import forestsList from './forests'
import user from './users'

export default combineReducers({
  forestsList: forestsList,
  user: user
})