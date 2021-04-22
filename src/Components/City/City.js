import React from 'react';
// B O O T S T R A P P I N ~
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
// C S S
import './City.css';

class City extends React.Component {
  render() {
    // console.log('city search mic check!');
    return (
      <>
        <Button onClick={this.props.handleShowSearch} variant="primary" type="submit">
          Search again
        </Button>
        <h2>{this.props.cityData.display_name}</h2>
        <h3>Latitude: {this.props.cityData.lat}</h3>
        <h3>Longitude: {this.props.cityData.lon}</h3>
        <Image src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&center=${this.props.cityData.lat},${this.props.cityData.lon}&zoom=14`} alt="city map" title="Return search map" fluid />
      </>
    );
  }
}

export default City;

// https://stackoverflow.com/questions/34097560/react-js-replace-img-src-onerror
// { <img src={this.state.img} ref={img => this.img = img} onError={
//     () => this.img.src = 'https://media.wired.com/photos/5a0201b14834c514857a7ed7/master/pass/1217-WI-APHIST-01.jpg'
// }></img> }


