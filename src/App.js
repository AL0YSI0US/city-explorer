// R E A C T
import React from 'react';
// A X I O S
import axios from 'axios'
// M A N D A L A
import logo from './mandalaLeap.jpg';
// C O M P O N E N T S
// C S S
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          C R E A T E the change you want to see . . .
        </p>
        <a
          className="App-link"
          href="https://sourcecred.io/docs/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Source Cred
        </a>
      </header>
    </div>
  );
}

export default App;
