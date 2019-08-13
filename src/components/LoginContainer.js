import React, { Component } from 'react'
import { connect } from 'react-redux'
import Login from './Login'
// import { sendUser } from '../actions/users'

class LoginContainer extends Component {
  render() {

    return <div>
      <Login />
    </div>  
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

const mapDispatchToProps = {
  // sendUser
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)