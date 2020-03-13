import React, { useState, useEffect } from "react"
import useInput from "../../hooks/useInput"
import SearchBar from "../SearchBar"
import Card from "../Card"
import axios from "axios"
import "../../Style/datatypes.css"
import { REACT_APP_MOVIE } from "../../.config.js"
require("dotenv").config()

const Shows = props => {
  const [shows, setShows] = useState([])
  const [{ searchShows }, setValues] = useInput({ searchShows: "" })

  useEffect(() => {
    axios
    .get(
      `https://api.themoviedb.org/3/tv/popular?api_key=${REACT_APP_MOVIE}&language=en-US&page=1`
    )
      .then(results => {
        setShows(results.data.results)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  const handleSubmit = e => {
    e.preventDefault()
    axios
    .get(
      `https://api.themoviedb.org/3/search/tv/?api_key=${REACT_APP_MOVIE}&query=${searchShows}`
    )
    .then(results => {
      setShows(results.data.results)
    })
  }

  return (
    <div className="list-container">
        <h1>T.V. Series</h1>
        <SearchBar
          handleSubmit={handleSubmit}
          handleChange={setValues}
          value={searchShows}
          name="searchShows"
        />
      <div className="data-list-container">
        {shows.map((show, i) => {
          // console.log(show.show)
          const { poster_path, original_name, vote_average, id } = show
          return (
            // <div className="data-container" key={i}>
              <Card
                key={i}
                image={`https://image.tmdb.org/t/p/w500${poster_path}`}
                msg={'Added show to Favorites'}
                body={{
                  external_id: id,
                  image: `https://image.tmdb.org/t/p/w500${poster_path}`,
                  name: original_name,
                  rating: vote_average || 0,
                  category_id: 4
                }}
              />
            // </div>
          )
        })}
      </div>
    </div>
  )
}

export default Shows