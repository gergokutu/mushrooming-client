import React from 'react';
import './App.css';
import ForestsListContainer from './components/ForestsListContainer'
import { Route } from 'react-router-dom'
import ForestContainer from './components/ForestContainer'
import LoginContainer from './components/LoginContainer'

import { baseUrl } from './constants'
import { allForests } from './actions/forests'
import { connect } from 'react-redux'


class App extends React.Component {
  source = new EventSource(`${baseUrl}/stream`)

  componentDidMount () {
    this.source.onmessage = function (event) {
      const { data } = event
      const forests = JSON.parse(data)
      console.log('App this.props:', this.props)
      this.props.allForests(forests)
    }
  }
  
  render () {
    return (
      <div>
        <Route exact path='/forest' component={ForestsListContainer} />
        <Route path='/forest/:forestId' component={ForestContainer} />
        <Route path='/login' component={LoginContainer} />
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    forests: state.forests,
    user: state.user
  }
}

const mapDispatchToProps = {
  allForests
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
