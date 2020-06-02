import React from 'react';
import Solution from './components/Solution'
import logo from './logo.svg';
import './App.css';
import Score from './components/Score';
import Letter from './components/Letter';
import Letters from './components/Letters';

function App() {
  return (
    <div id='game'>
      < Score />
      < Solution />
      < Letters/>
    </div>

  );
}

export default App;
