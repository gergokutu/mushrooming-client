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
      ? <div className='loginFormContainer'>
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
      : <div className='loggedIn'>
          <h3>Almost there :)</h3>
          <img src='https://i.dlpng.com/static/png/356841_preview.png' />
          <p>Click on the link below!!!</p>
          <Link to='/forest' className='link'>Forests</Link>
        </div>

    return <div>
      <h1 className='App'>Enter to Mushroom Land!</h1>
      {content}
      <div className='imageLine'>
        <img className='image' src='http://static1.squarespace.com/static/580c7d2b6a49636956c284ae/580cb1b1893fc08940963d0a/580cb8fc8419c2606f6b7409/1477745594188/mushroom2.png?format=1500w' />
        <img className='image' src='http://static1.squarespace.com/static/580c7d2b6a49636956c284ae/580cb1b1893fc08940963d0a/580cb8fc8419c2606f6b7409/1477745594188/mushroom2.png?format=1500w' />
      </div>
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