import React from 'react';
// B O O T S T R A P P I N ~
import Container from 'react-bootstrap/Container';
// C S S
import 'bootstrap/dist/css/bootstrap.min.css';
import './Movies.css';

import Movie from './Movie';

class Movies extends React.Component {
  render() {
    // console.log('movie data mic check!');
    if (this.props.movies.length === 0) {
      return ('');
    }
    return (
      <>
        <Container>
          <h1>🎥 What's been filmed here? 🎬</h1>
          {
            this.props.movies.map((movie, index) => (
              <Movie key={index} movie={movie} />
            ))
          }
        </Container>
      </>
    );
  }
}

export default Movies;
