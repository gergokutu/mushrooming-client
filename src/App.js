import React from 'react';
import './App.css';
import ForestsListContainer from './components/ForestsListContainer'
import { Route } from 'react-router-dom'
import ForestContainer from './components/ForestContainer'
import LoginContainer from './components/LoginContainer';

function App() {
  return (
    <div>
      <Route exact path='/forest' component={ForestsListContainer} />
      <Route path='/forest/:forestId' component={ForestContainer} />
      <Route path='/login' component={LoginContainer} />
    </div>
  );
}

export default App;
