import React from 'react'
import Movie from './Movie'

const MovieList = (props) => {
  return (
    <div>
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