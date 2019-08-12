import React from 'react';
import './App.css';
import ForestsListContainer from './components/ForestsListContainer'
import { Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <header>
        Choose your Forest ;)
      </header>
      <main>
        <Route exact path='/' component={ForestsListContainer} />
      </main>
    </div>
  );
}

export default App;
