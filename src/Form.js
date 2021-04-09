import React from 'react';
// P U T ~ S T U F F ~ I N  ~ A ~ C O N T A I N E R
// import Container from 'react-bootstrap/Container';
// F O R M = B O O T S T R A P P I N ~
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
// C S S 
import './Form.css';

class CityForm extends React.Component {
  render() {
    console.log(this.props)
   return (
      <Form onSubmit={this.props.onSubmit}>
        <Form.Group>
          <Form.Control onInput={this.props.onInput} size="lg" type="text" placeholder="Large text" />
          <Button type="submit" variant="primary" size="lg">Explore!</Button>
        </Form.Group>
      </Form>
  );
  }
}

export default CityForm;