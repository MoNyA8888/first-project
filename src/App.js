import React from 'react';
import logo from './Instagram-Icon.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="logo" alt="logo" />
        <p>


          Right your name
        </p>
        <input className="searchbar"></input>
        <a href='#'  >si up</a>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          don't click here
        </a>
      </header>
    </div >
  );
}

export default App;
