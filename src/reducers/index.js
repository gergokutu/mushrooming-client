import { combineReducers } from 'redux'
import forestsList from './forests'
import login from './login'

export default combineReducers({
  forestsList: forestsList,
  login: login
})