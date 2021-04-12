import React from 'react';

import Form 'react-bootstrap';

import Button 'react-bootstrap';

import './Search.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    haveSearched: false,
    city: '',
    cityData: {},
    errors: [],
    this.textInput = React.createRef();
  }
  showSearch = () => {
    this.setState({ haveSearched: false });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.handleSearch(this.textInput.current.value);
  }
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
  this.setState({error: `${err.message}: ${err.response.data.error}`});
}
 
  // MuckT Components for city-explorer: https://github.com/MuckT/city-explorer/tree/main/src/Components
  // TODO: Pull out the form into its own component - Refer to my Search component
  // TODO: Create a new component for city image  display - Refer to my City component
  // TODO: Create a new component for errors - Refer  to my Errors Component

handleSearch = async (event) => {
  event.preventDefault();
  this.props.handleSearch(this.textInput.current.value);
}
  // console.log(this.state.city);
  render() {
    // console.log(this.props)
    return (
      <>
        <h1>City Explorer</h1>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="city">
            <Form.Label>City Name</Form.Label>
            <Form.Control placeholder="City to explore..." size="lg" type="text" ref={this.textInput} />
          </Form.Group>
          <Button variant="primary"  type="submit">
            ✨Explore!
          </Button>
        </Form>
      </>
    );
  }
}

export default Search;