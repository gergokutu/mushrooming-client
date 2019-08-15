import React, { Component } from 'react'
import { connect } from 'react-redux'
import LoginForm from './LoginForm'
import NewUserForm from './NewUserForm'
import { loginUser } from '../actions/users'
import { createUser } from '../actions/users'

class LoginFormContainer extends Component {

  componentDidMount() {
    const id = this.props.match.params.userId
    this.props.loginUser(id)
    this.props.createUser()
  }

  render() {
    return <div>
      <h1 className='App'>Welcome to Mushroom Land!</h1>
      <p className='App'>Please, login or create a new user</p>
      <LoginForm />
      <NewUserForm />
    </div>  
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

const mapDispatchToProps = {
  loginUser,
  createUser
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginFormContainer)