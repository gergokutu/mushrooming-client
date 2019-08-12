import React from 'react';
import './App.css';
import ForestsListContainer from './components/ForestsListContainer'

function App() {
  return (
    <div>
      <header>
        Choose your Forest ;)
      </header>
      <main>
        <ForestsListContainer />
      </main>
    </div>
  );
}

export default App;
