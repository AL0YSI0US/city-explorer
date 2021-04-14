import React from 'react';
// B O O T S T R A P P I N ~
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
// C S S
import './City.css';

class City extends React.Component {
  render() {
    console.log('mic check!');
    return (
      <>
        <Button onClick={this.props.handleShowSearch} variant="primary" type="submit">
          Search again
        </Button>
        <h2>{this.props.cityData.display_name}</h2>
        <h3>{this.props.cityData.lat}, {this.props.cityData.lon}</h3>
        <img src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&center=${this.props.cityData.lat},${this.props.cityData.lon}&zoom=12`} alt="city map" />
      </>
    );
  }
}

export default City;
