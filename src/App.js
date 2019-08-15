import React from 'react';
import './App.css';
import ForestsListContainer from './components/ForestsListContainer'
import { Route } from 'react-router-dom'

import LoginContainer from './components/LoginContainer'

import ForestContainer from './components/ForestContainer'
import LoginFormContainer from './components/LoginFormContainer'

import { baseUrl } from './constants'
import {allForests} from './actions/forests'
import { connect } from 'react-redux'



class App extends React.Component {
  source = new EventSource(`${baseUrl}/stream`)
  

  componentDidMount () {
    this.source.onmessage = (event) => {
      const { data } = event
      const forests = JSON.parse(data)
      console.log('forests',forests)
      console.log('App this.props:', this.props)
      this.props.allForests(forests)
    }
  }
  
  render () {
    return (
      
      <div>
        <Route exact path='/' component={LoginFormContainer} />
        <Route exact path='/forest' component={ForestsListContainer} />
        <Route path='/forest/:forestId' component={ForestContainer} />
      </div>
    )
  }
}

function mapStateToProps (state) {
  console.log('app state.forests', state)
  return {
    forests: state.forestsList,
    user: state.user
  }
}

const mapDispatchToProps = {
  allForests
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
