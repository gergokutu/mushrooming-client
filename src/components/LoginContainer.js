import React, { Component } from 'react'
import { connect } from 'react-redux'
import Login from './Login'
import NewUser from './NewUser'
// import { loginUser } from '../actions/users'
// import { createUser } from '../actions/users'

class LoginContainer extends Component {
  render() {

    return <div>
      <h1 className='App'>Welcome to Mushroom Land!</h1>
      <p className='App'>Please, login or create a new user</p>
      <Login />
      <NewUser />
    </div>  
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

const mapDispatchToProps = {
  // loginUser,
  // createUser
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)