import React from 'react';
import './App.css';
import ForestsListContainer from './components/ForestsListContainer'
import { Route } from 'react-router-dom'
import ForestContainer from './components/ForestContainer'

function App() {
  return (
    <div>
      <Route exact path='/' component={ForestsListContainer} />
      <Route path='/forest/:forestId' component={ForestContainer} />
    </div>
  );
}

export default App;
