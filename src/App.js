import React from 'react';
// B O O T S T R A P P I N ~
// import Jumbotron from 'react-bootstrap/Jumbotron';
// A X I O S
import axios from 'axios';
// C O M P O N E N T S ?
import Search from './Search.js';
// F O O T E R ?
// C S S
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      haveSearched: false,
      city: '',
      cityData: {},
      errors: [],
    };


    render() {
      // console.log(this.props)
      return (
       <Search />
    );
  }
}

export default App;
