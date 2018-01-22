import React from 'react';
import { Link } from 'react-router-dom';

//import styles
import './movie-card.css'

const MovieCard = ({ movie }) => {
  const movieId = movie.id;
  if (!movie.poster_path) return null;
  return (
    <div className="movie-card">
      <img
        className="movie-card__image"
        src={`http://image.tmdb.org/t/p/w342${movie.poster_path}`}
        alt={`${movie.title} Movie Poster`}
      />
      <Link to={`/movie/${movieId}`}>
        <div className="movie-card__play">
          <i className="fa fa-play"></i>
        </div>
      </Link>
      <h3 className="movie-card__title">{movie.title}</h3>
    </div>
  );
}

export default MovieCard;
