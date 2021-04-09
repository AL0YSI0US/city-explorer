// R E A C T
import React from 'react';
// A X I O S
import axios from 'axios'
// C O M P O N E N T S
import Form from './Form.js';
// C S S
import './App.css';

class App extends React.Component {
  // this creep is listening . . .
handleSearch = () => { 
  console.log('I am the handleSearch method!!!');
}
handleFormSubmit = () => {
  console.log('button clicked yo!');
}





  render() {
    return (
     <Form onInput={this.handleSearch} onSubmit={this.handleFormSubmit}/>  
   );
  }
}

export default App;
