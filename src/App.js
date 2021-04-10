import React from 'react';
// B O O T S T R A P P I N ~
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// import Jumbotron from 'react-bootstrap/Jumbotron';
// A X I O S
import axios from 'axios';
// C O M P O N E N T S ?
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
    // Create a reference to access DOM nodes or React elements created in the render method.
    // Read more here: https://reactjs.org/docs/refs-and-the-dom.html
    this.textInput = React.createRef();
  }

  showSearch = () => {
    this.setState({haveSearched: false});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.handleSearch(this.textInput.current.value);
  }

  handleSearch = async(citySearched) => {
    // console.log(this.state.city);

    // T R Y  &  C A T C H
    // Write code to check for an error, if one is present: do something clever with it

    // try to do something
    try {
      // Request and wait for city LocationIQ data Limit 1 `&limit=1`
      // LocationIQ Docs: https://locationiq.com/docs
      let cityData = await axios.get(`https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${citySearched}&format=json&limit=1`);
      console.log(cityData);
      let cityICareAboutData = cityData.data[0];
      this.setState({
        cityData: cityICareAboutData
      });
      // write a catch statement for if something goes wrong
    } catch (err) {
      console.log(err);
      this.setState({ error: `${err.message}: ${err.response.data.error}` });
    }
  }

  // MuckT Components for city-explorer: https://github.com/MuckT/city-explorer/tree/main/src/Components
  // TODO: Pull out the form into its own component - Refer to my Search component
  // TODO: Create a new component for city image display - Refer to my City component
  // TODO: Create a new component for errors - Refer to my Errors Component
  
  render() {
    // console.log(this.props)
    return (
      <>
        <h1>City Explorer</h1>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="city">
            <Form.Label>City Name</Form.Label>
            <Form.Control ref={this.textInput}/>
          </Form.Group>
          <Button type="submit" variant="primary" size="lg">✨Explore!</Button>
        </Form>
      </>
    );
  }
}

export default App;
