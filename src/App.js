import React from 'react';
// B O O T S T R A P P I N ~
// import Jumbotron from 'react-bootstrap/Jumbotron';
// A X I O S
import axios from 'axios';
// C O M P O N E N T S 
import Header from './Components/Header/Header.js';
import City from './Components/City/City.js'
import Search from './Components/Search/Search.js';
import Footer from './Components/Footer/Footer.js';
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
      <>
        <Header />
        <City />
        <Search />
        <Footer />
      </>
    );
  }
}

export default App;
