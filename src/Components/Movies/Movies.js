import React from 'react';
// B O O T S T R A P P I N ~
import Jumbotron from 'react-bootstrap/Jumbotron';
// C S S
import 'bootstrap/dist/css/bootstrap.min.css';
import './Movies.css';

class Movies extends React.Component {
  render() {
    if (this.props.weatherData.length === 0) {
      return ('');
    }
    return (
      <>
        <Jumbotron>
          <h1>Movie Data Goes Here</h1>
          {/* look up documentation.... */}
        </Jumbotron>
      </>
    );
  }
}

export default Movies;
