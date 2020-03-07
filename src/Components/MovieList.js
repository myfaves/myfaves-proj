import React from 'react'
import Movie from './Movie'
import '../Style/movie.css'

const MovieList = (props) => {
  return (
    <div className="movielist-container">
      {
        props.movies.map((movie, i) => {
          return (
            <Movie key={i} image={movie.poster_path}/>
          )
        })
      }
    </div>
  )
}

export default MovieList;