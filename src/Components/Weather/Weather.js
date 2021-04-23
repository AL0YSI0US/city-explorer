'use strict';

import React from 'react';
// B O O T S T R A P P I N ~
import CardDeck from 'react-bootstrap/CardDeck';
// H A N D L E R S
import WeatherDay from './WeatherDay';
// C S S
import 'bootstrap/dist/css/bootstrap.min.css';
import './Weather.css';

class Weather extends React.Component {

  render() {
    // console.log('weather data mic check!');
    if (this.props.forecast.length === 0) {
      return ('');
    }
    return (
      <div>
        <h1>🌧️ Projected Weather 🌞</h1>
        <CardDeck>
          {this.props.forecast.map((day, index) => (
            <WeatherDay key={index} day={day} />
          ))}
        </CardDeck>
      </div>
    );
  }
}


export default Weather;
