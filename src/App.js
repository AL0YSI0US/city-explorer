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
      cityInput: '',
      cityData: {},
      errors: [],
    };
  }

  showSearch = () => {
    this.setState({haveSearched: false});
  }

  handleSearch = async(cityInput) => {
    if(!cityInput) {
      console.warn('No City Selected');
    } else {
      try {
        // TODO: Handle searches from multiple regions
        let response = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_IQ_API_KEY}&q=${cityInput}&format=json&limit=1`);
        this.setState({
          haveSearched: true,
          cityInput: cityInput,
          cityData: response.data[0],
        });
      } catch (err) {
        console.log(err.response);
        this.setState({
          errors: [{status: err.response.status, errorMsg: err.response.data.error}],
          haveSearched: false,
        });
      }
    }
  }

  render() {
    return (
      <>
        <Header />
        {this.state.haveSearched && this.state.errors.length === 0 ? 
          <City handleShowSearch={this.showSearch} cityData={this.state.cityData} /> : 
          this.state.errors.length !== 0 ?
          <Error handleSearch={this.handleSearch} errors={this.state.errors} /> :
          <Search handleSearch={this.handleSearch} />}
          <Footer />
      </>
    );
  }
}

export default App;
