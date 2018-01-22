import React from 'react';

//import styles
import './movie-list.css'

//import components
import MovieCard from './movie-card';

const MovieList = ({ title, movies }) => (
  <div className="movie-list">
    <h2 className="movie-list__title">{title}</h2>
    <div className="movie-list__items">
      {movies.map((movie) => (<MovieCard key={movie.id} movie={movie} />))}
    </div>
  </div>
)

export default MovieList;
