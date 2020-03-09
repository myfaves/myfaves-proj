import React, { useState, useEffect } from "react"
import SearchBar from "./SearchBar"
import MovieList from "./MovieList"
import axios from 'axios'

const Picker = props => {
  const {REACT_APP_MOVIE, REACT_APP_GAME} = process.env
  const [searchMovies, setSearchMovies] = useState("")
  const [movies, setMovies] = useState([])
  useEffect(() => {
    getGames()
  }, [])
  const submitMovies = e => {
    e.preventDefault()
    fetch(
      `https://api.themoviedb.org/3/search/movie/?api_key=${REACT_APP_MOVIE}&query=${searchMovies}`
    )
      .then(data => data.json())
      .then(data => setMovies(data.results))
      .catch(err => console.log(err))
  }
  
  return (
    <div>
      <SearchBar handleSubmit={submitMovies} handleChange={setSearchMovies} />
      <MovieList movies={movies} />
    </div>
  )
}

export default Picker
