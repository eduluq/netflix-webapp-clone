import React, { Component } from 'react';
import ReactPlayer from 'react-player'

import './movie.css'

class Movie extends Component {

  constructor(props) {
    super(props);
    this.state = {
      movie: {}
    }
  }

  componentDidMount() {
    const movieId = this.props.match.params.movieId;
    const apiKey = "7028bd85520ea9cd3767dffb2d82be5e";
    const url = `https://api.themoviedb.org/3/tv/${movieId}?api_key=${apiKey}&append_to_response=videos`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        const trailer = data.videos.results.filter(video => {
          if(video.type === "Trailer" && video.site === "YouTube")
            return video;
          else
            return null
        })
        const movie = {
          title: data.name,
          overview: data.overview,
          poster_path: data.poster_path,
          backdrop_path: data.backdrop_path,
          trailer: trailer[0]
        }
        this.setState({movie: movie});
      })
      .catch(error => console.log("error", error))
  }

  render() {
    let { title, overview, backdrop_path, trailer } = this.state.movie
    const bg = `http://image.tmdb.org/t/p/w1280${backdrop_path}`

    //if there's no movie
    if(Object.keys(this.state.movie).length === 0) {
      return (<h1 className="movie-details__title">Loading...</h1>)
    }

    return (
      <div
        className="movie"
        style={{ background: `url(${bg})` }}
      >
        <div className="movie-details">
          <h1 className="movie-details__title">{title}</h1>
          <h2 className="movie-details__overview">{overview || null}</h2>
          {trailer &&
            <div className="movie-details__trailer">
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${trailer.key}`}
              />
            </div>
          }
        </div>
      </div>
    )
  }
}

export default Movie;
