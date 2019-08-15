import React, { Component } from 'react'
import { connect } from 'react-redux'
import LoginForm from './LoginForm'
import NewUserForm from './NewUserForm'
import { loginUser } from '../actions/users'
// import { createUser } from '../actions/users'

class LoginFormContainer extends Component {
  state = { 
    existing: {
      email: '', 
      password: ''
    }, 
    new: {
      newemail: '',
      newpassword: '',
      nickname: '',
      avatarUrl: ''
    } 
  }

  // componentDidMount() {
  //   const id = this.props.match.params.userId
  //   this.props.loginUser(id)
  //   this.props.createUser()
  // }

  onSubmitLogin = (event) => {
    console.log('onSubmit:')
    event.preventDefault()
    this.props.loginUser( this.state.existing)
  }

  onChangeLogin = (event) => {
    console.log('Login » event.target.value:', event.target.value)
    console.log('Login » event.target.name:', event.target.name)

    const existing = this.state.existing
    existing[event.target.name] = event.target.value

    this.setState({
      existing
    })
    console.log('state test',this.state)
  }

  onSubmitNew = (event) => {
    console.log('OnsubmitNew:')
    event.preventDefault()
    this.props.loginUser( this.state.new )
  }

  onChangeNew = (event) => {
    console.log('New » event.target.value:', event.target.value)
    const next = this.state.new
    next[event.target.name] = event.target.value

    this.setState({
      new: next
    })
    console.log('state test',this.state)
  }

  render() {
    return <div>
      <h1 className='App'>Welcome to Mushroom Land!</h1>
      <p className='App'>Please, login or create a new user</p>
      <LoginForm 
        onSubmitLogin={this.onSubmitLogin}
        onChangeLogin={this.onChangeLogin}
        values={this.state.existing}
      />
      <NewUserForm 
        onSubmitNew={this.onSubmitNew}
        onChangeNew={this.onChangeNew}
        values={this.state.new}
      />
    </div>  
  }
}

// function mapStateToProps(state) {
//   return {
//     user: state.user
//   }
// }

// const mapDispatchToProps = {
//   loginUser,
//   createUser
// }

// export default connect(mapStateToProps, mapDispatchToProps)(LoginFormContainer)
export default connect(null, {loginUser})(LoginFormContainer)