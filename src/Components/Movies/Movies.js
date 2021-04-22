import React from 'react';
// B O O T S T R A P P I N ~
import Container from 'react-bootstrap/Container';
// C S S
import 'bootstrap/dist/css/bootstrap.min.css';
import './Movies.css';

class Movies extends React.Component {
  render() {
    if (this.props.movies.length === 0) {
      return ('');
    }
    return (
      <>
        <Container>
          <h1>🎥 What's been filmed here? 🎬</h1>
          {
            this.props.movies.map((movie, index) => (
              <div key={index} >
                <img src={movie.image_url} alt={movie.title} />
                <h2>{movie.title}</h2>
                <p>{movie.overview}</p>
                <p id="sm">Average votes: {movie.average_votes}</p>
                <p id="sm">Total votes: {movie.total_votes}</p>
                <p id="sm">Popularity: {movie.popularity}</p>
                <p id="med">Realease date: {movie.released_date}</p>
              </div>
            ))
          }
        </Container>
      </>
    );
  }
}

export default Movies;
