import React, { Component } from 'react';

//import styles
import './search.css'

//import components
import MovieCard from '../components/movie-card';

class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {
      query: "",
      movies: []
    }
  }

  componentDidMount() {
    const query = this.props.match.params.searchQuery;
    this.searchMovie(query);
  }

  componentWillReceiveProps(nextProps) {
    const query = nextProps.match.params.searchQuery;
    this.searchMovie(query);
  }

  searchMovie(query) {
    const apiKey = "7028bd85520ea9cd3767dffb2d82be5e";
    const url = `https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&query=${query}`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const movies = data.results.map(movie => ({
          id: movie.id,
          title: movie.name,
          poster_path: movie.poster_path,
        }))
        this.setState({
          query: query,
          movies: movies
        });
      })
  }

  render() {
    const { query, movies } = this.state;
    return(
      <div
        className="main"
        style={{color: "white", paddingLeft: "4%", paddingTop: "40px"}}
      >
        <h2 className="movie-list__title">
          {movies.length > 0 ? `Searching for: ${query}` : `No titles match with ${query}`}
        </h2>
        <div className="movies-grid">
          {movies.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    )
  }
}

export default Search;
