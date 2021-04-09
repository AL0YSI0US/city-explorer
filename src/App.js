import React from 'react';
// B O O T S T R A P P I N ~
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
// A X I O S
import axios from 'axios'
// C O M P O N E N T S ?
// F O O T E R ?
// C S S
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      city: '',
      cityData,
      map
    };
  }
  handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(this.state.city);

    // T R Y  &  C A T C H
    // Write code to check for an error, if one is present: do something clever with it

    // try to do something
    try {
      let cityData = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.state.city}&format=json`);
      console.log(cityData);
      let cityData = await axios.get(`https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.state.city}&format=json`);
      console.log(cityData);
      let cityICareAboutData = cityData.data[0];
      this.setState({
        cityData: cityICareAboutData
      });
      // write a catch statement for if something goes wrong
    } catch (err) {
      debugger;
      console.log(err);
      this.setState({ error: `${err.message}: ${err.response.data.error}` });
    }
  }
  render() {
    // console.log(this.props)
    return (
    <>
      <h1>City Explorer</h1>
        <Form onSubmit={this.props.onSubmit}>
          <Form.Group controlId="city">
            <Form.Label>City Name</Form.Label>
            <Form.Control
              value={this.state.city}>
              onInput={e => this.setState({ city: e.target.value })}>
            </Form.Control>
          </Form.Group>
          <Button type="submit" variant="primary" size="lg">✨Explore!</Button>
        </Form>
   {this.state.error ? <h3>{this.state.error}</h3> : ''}
   {/* Update the page with the returned `display_name`, latitude, and    longitude, displayed nicely in an appropriate Bootstrap component. */}
   {this.state.cityData.lat !== undefined ?} <Jumbotron>
   <h3>{this.state.cityData.display_name}</h3>
   <h5>{this.state.cityData.lat}, {this.state.cityData.lon}</h5> </Jumbotron> 
   </>
});

export default App;
