import React from 'react';
// B O O T S T R A P P I N ~
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// C S S
import 'bootstrap/dist/css/bootstrap.min.css';
import './Search.css';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textInput : React.createRef()
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleSearch(this.state.textInput.current.value);
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group>
          <Form.Label>Enter a city to begin</Form.Label>
          <Form.Control placeholder="where would you like to explore?..." size="lg" type="text" ref={this.state.textInput} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Explore!
        </Button>
      </Form>
    );
  }
}

export default Search;




// MuckT Components for city-explorer: https://github.com/MuckT/city-explorer/tree/main/src/Components
// TODO: Pull out the form into its own component - Refer to my Search component
// TODO: Create a new component for city image  display - Refer to my City component
// TODO: Create a new component for errors - Refer  to my Errors Component
