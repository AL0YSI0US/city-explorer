import React from 'react';
// B O O T S T R A P P I N ~
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Jumbotron  from 'react-bootstrap/Jumbotron';

import './Error.css';

class Error extends React.Component {
  refreshPage = () => {
    window.location.reload(); 
  }

  render() {
    return (
      <Jumbotron fluid>
        <h1>Something tells me that was not on purpose...</h1>
        <p>{this.props.errors[0].status} - {this.props.errors[0].errorMsg}</p>
        <Button onClick={this.refreshPage} variant="primary" type="submit">
          Try your search again
        </Button>
      </Jumbotron>
    );
  }
}

export default Error;  
