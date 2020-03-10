import React, { useState } from "react"
import useInput from "../../hooks/useInput"
import SearchBar from "../SearchBar"
import Movie from "../Movie"
import { REACT_APP_MOVIE } from "../../.config.js"
import axios from 'axios'
require("dotenv").config()

const Movies = props => {
  const [movies, setMovies] = useState([])
  const [{ searchMovies }, setValues] = useInput({ searchMovies: "" })
  const movieKey = REACT_APP_MOVIE

  const submitMovie = e => {
    e.preventDefault()
    axios.get(
      `https://api.themoviedb.org/3/search/movie/?api_key=${movieKey}&query=${searchMovies}`
    )
      .then(data => data.json())
      .then(data => {
        setMovies(data.results)
      })
  }
  return (
    <div>
      <SearchBar
        handleSubmit={submitMovie}
        handleChange={setValues}
        value={searchMovies}
        name="searchMovies"
      />
      <div className="list-container">
        <div className="movielist-container">
          {movies.map((movie, i) => {
            return <Movie key={i} image={movie.poster_path} />
          })}
        </div>
      </div>
    </div>
  )
}

export default Movies
