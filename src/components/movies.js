import React, { Component } from 'react';

//import styles
import './movies.css';

//import components
import MovieList from './movie-list';

class Movies extends Component {

  constructor(props) {
    super(props);
    this.state = {
      lists: []
    }
    this.listIds = ['45298', '45299', '45300'];
  }

  componentDidMount() {
    const apiKey = '7028bd85520ea9cd3767dffb2d82be5e';
    const endPoint = 'https://api.themoviedb.org/3/list';

    const results = this.listIds.map((id) => {
      const url = `${endPoint}/${id}?api_key=${apiKey}`;
      const promise = fetch(url)
        .then(response => response.json())
        .then(data => {
          const movies = data.items.map((item) => ({
            id: item.id,
            title: item.name,
            poster_path: item.poster_path,
          }));
          const list = {
            id: id,
            title: data.name,
            movies: movies,
          }
          return list;
        })
        return promise;
    });

    Promise.all(results).then((completed) => {
      this.setState({lists: completed});
    })

  }

  render() {
    const { lists } = this.state;
    return (
      <div className="movies">
        {lists.map((list) => {
          const { id, title, movies } = list;
          return (
            <MovieList key={id} title={title} movies={movies} />
          )
        })}
      </div>
    )
  }

}

export default Movies;
