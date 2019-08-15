import React, { Component } from 'react'
import { connect } from 'react-redux'
import LoginForm from './LoginForm'
import NewUserForm from './NewUserForm'
import { loginUser, createUser } from '../actions/users'
import { Link } from 'react-router-dom'


class LoginFormContainer extends Component {
  state = { 
    existing: {
      email: '', 
      password: ''
    }, 
    new: {
      email: '',
      password: '',
      nickname: '',
      avatarUrl: ''
    } 
  }

  onSubmitLogin = (event) => {
    console.log('onSubmit!:')
    event.preventDefault()
    this.props.loginUser( this.state.existing.email, this.state.existing.password)
  }

  onChangeLogin = (event) => {
    const { name, value } = event.target

    console.log("targetTest", name, value)

    const existing = this.state.existing
    existing[name] = value

    this.setState({
      existing
    })
  }

  onSubmitNew = (event) => {
    event.preventDefault()
    this.props.createUser( this.state.new )
  }

  onChangeNew = (event) => {
    const next = this.state.new
    next[event.target.name] = event.target.value

    this.setState({
      new: next
    })
  }

  render () {
    console.log("render test")
    const { login } = this.props

    console.log('login test:', login)

    const content = !login.jwt
      ? <div>
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
      : <Link to='/forest'>Forests</Link>

    return <div>
      <h1 className='App'>Welcome to Mushroom Land!</h1>
      {content}
    </div>  
  }
}

function mapStateToProps(state) {
  return {
    login: state.login
  }
}

const mapDispatchToProps = {
  loginUser,
  createUser
}

// export default connect(mapStateToProps, mapDispatchToProps)(LoginFormContainer)
export default connect(mapStateToProps, mapDispatchToProps)(LoginFormContainer)