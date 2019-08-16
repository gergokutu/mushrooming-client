import React, { Component } from 'react'
import { connect } from 'react-redux'
import LoginForm from './LoginForm'
import NewUserForm from './NewUserForm'
import { loginUser, createUser } from '../actions/users'
import { Link } from 'react-router-dom'
import UserError from './UserError';


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
    },
    new_created: false 
  }

  onSubmitLogin = (event) => {
    event.preventDefault()
    this.props.loginUser( this.state.existing.email, this.state.existing.password)
  }

  onChangeLogin = (event) => {
    const { name, value } = event.target


    const existing = this.state.existing
    existing[name] = value

    this.setState({
      existing
    })
  }

  onSubmitNew = (event) => {
    event.preventDefault()
    this.props.createUser( this.state.new )
    this.setState({
      new: {
        email: '',
        password: '',
        nickname: '',
        avatarUrl: ''
      },
      new_created: true
    })

  }

  onChangeNew = (event) => {
    const next = this.state.new
    next[event.target.name] = event.target.value

    this.setState({
      new: next
    })
  }

  render () {
    const { login } = this.props
    const content = !login.jwt
      ? <div className='loginFormContainer'>
        <p className='App'>Please, log in or create a new user</p>
        <LoginForm 
          onSubmitLogin={this.onSubmitLogin}
          onChangeLogin={this.onChangeLogin}
          values={this.state.existing}
        />
        
        <UserError message={login.message}/>
        {this.state.new_created&&<p className='App'>Now you can log in!</p>}
        <NewUserForm 
          onSubmitNew={this.onSubmitNew}
          onChangeNew={this.onChangeNew}
          values={this.state.new}
        />
      </div>
      : <div className='loggedIn'>
          <h3>Almost there :)</h3>
          <img src='https://i.dlpng.com/static/png/356841_preview.png' alt='mushroom'/>
          <p>Click on the link below!!!</p>
          <Link to='/forest' className='link'>Forests</Link>
        </div>

    return <div>
      <h1 className='App'>Enter to Mushroom Land!</h1>
      {content}
      <div className='imageLine'>
        <img className='image' src='http://static1.squarespace.com/static/580c7d2b6a49636956c284ae/580cb1b1893fc08940963d0a/580cb8fc8419c2606f6b7409/1477745594188/mushroom2.png?format=1500w' alt='mushrooms'/>
        <img className='image' src='http://static1.squarespace.com/static/580c7d2b6a49636956c284ae/580cb1b1893fc08940963d0a/580cb8fc8419c2606f6b7409/1477745594188/mushroom2.png?format=1500w' alt='mushrooms'/>
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


export default connect(mapStateToProps, mapDispatchToProps)(LoginFormContainer)