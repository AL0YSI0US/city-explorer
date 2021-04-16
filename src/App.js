import React from 'react';
// B O O T S T R A P P I N ~
// A X I O S
import axios from 'axios';
// C O M P O N E N T S
import Header from './Components/Header/Header.js';
import City from './Components/City/City.js';
import Search from './Components/Search/Search.js';
import Error from './Components/Error/Error.js';
import Weather from './Components/Weather/Weather.js';
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
      cityName: '',
      // recent params
      latitude: '',
      longitude: '',
      weatherInformation: [],
    };
  }

  showSearch = () => {
    this.setState({ haveSearched: false });
  }

  handleSearch = async (cityInput) => {
    console.log('searched', cityInput);
    try {
      let locationResponse = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${cityInput}&format=json&limit=1`);
      console.log(locationResponse.data[0]);
      console.log('display name', locationResponse.data[0].display_name);
      console.log('latitude', locationResponse.data[0].lat);
      console.log('longitude', locationResponse.data[0].lon);
      this.setState({
        haveSearched: true,
        cityInput: cityInput,
        cityData: locationResponse.data[0],
        // show city lat and long helped by Hexx
        cityName: locationResponse.data[0].display_name,
        latitude: locationResponse.data[0].lat,
        longitude: locationResponse.data[0].lon,
      });
    } catch (err) {
      console.log(err);
      this.setState({
        errors: err,
        haveSearched: false,
      });
    }
    // suitable line break @ the end to call it in . . .
    this.fetchWeather();
  }
  // const vs let [let allows you to change the data types wheras the data type cannot be altered in a const]
  // create a function that will get the weather data from our back end server
  // async await - axios GET call [to local host during development stage]
  fetchWeather = async() => {
    // local host will need to be placed in the .env file
    // after heroku deployment update to the deployed url
    // const dailyForecast = await axios.get(`${WEATHER_URL}?&lat=0000&lon=0000`);
    const dailyForecast = await axios.get(`http://localhost:3002/weather`);
    console.log('This is the daily forecast:', dailyForecast.data);
    // updating the state
    this.setState({weatherInformation: dailyForecast.data});
  }

  render() {
    console.log(this.state);
    return (
      <>
        <Header />
        {
          this.state.haveSearched && this.state.errors.length === 0 ?
            <City handleShowSearch={this.showSearch} cityData={this.state.cityData} /> :
            this.state.errors.length !== 0 ?
              <Error handleSearch={this.handleSearch} errors={this.state.errors} /> :
              <Search handleSearch={this.handleSearch} />
        }
        <Weather handleShowSearch={this.showSearch} weatherInformation={this.state.weatherInformation} />
        <Footer />
      </>
    );
  }
}

export default App;
