import React, { useState, useEffect } from "react"
import useInput from "../../hooks/useInput"
import SearchBar from "../SearchBar"
import Card from "../Card"
import { REACT_APP_MOVIE } from "../../.config.js"
import axios from "axios"
import "../../Style/datatypes.css"
require("dotenv").config()

const Movies = props => {
  const [movies, setMovies] = useState([])
  const [{ searchMovies }, setValues] = useInput({ searchMovies: "" })

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${REACT_APP_MOVIE}&language=en-US&page=1`
      )
      .then(results => setMovies(results.data.results))
    // .then(data => {
    //   setMovies(data.results)
    // })
  }, [])

  const submitMovie = e => {
    e.preventDefault()
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie/?api_key=${REACT_APP_MOVIE}&query=${searchMovies}`
      )
      // .then(data => data.json())
      .then(results => {
        setMovies(results.data.results)
      })
  }
  return (
    <div className="list-container">
      <h1>Movies</h1>
        <SearchBar
          handleSubmit={submitMovie}
          handleChange={setValues}
          value={searchMovies}
          name="searchMovies"
        />
      <div className="data-list-container">
        {movies.map((movie, i) => {
          // console.log(movie)
          const { poster_path, original_title, vote_average, id } = movie
          return (
            <Card
              key={i}
              image={poster_path}
              msg={'Added movie to Favorites'}
              body={{
                external_id: id,
                image: poster_path,
                name: original_title,
                rating: vote_average,
                category_id: 1
              }}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Movies
