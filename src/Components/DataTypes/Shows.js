import React, { useState, useEffect } from "react"
import useInput from "../../hooks/useInput"
import SearchBar from "../SearchBar"
import Card from "../Card"
import axios from "axios"
import "../../Style/datatypes.css"
import { REACT_APP_RAPID } from "../../.config.js"
require("dotenv").config()

const Shows = props => {
  const [shows, setShows] = useState([])
  const [{ searchShows }, setValues] = useInput({ searchShows: "" })
  useEffect(() => {
    axios({
      method: "GET",
      url: "https://tvjan-tvmaze-v1.p.rapidapi.com/search/shows",
      headers: {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "tvjan-tvmaze-v1.p.rapidapi.com",
        "x-rapidapi-key": REACT_APP_RAPID
      },
      params: {
        q: "Survivor"
      }
    })
      .then(response => {
        // console.log(response.data)
        setShows(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  const handleSubmit = e => {
    e.preventDefault()
    axios({
      method: "GET",
      url: "https://tvjan-tvmaze-v1.p.rapidapi.com/search/shows",
      headers: {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "tvjan-tvmaze-v1.p.rapidapi.com",
        "x-rapidapi-key": REACT_APP_RAPID
      },
      params: {
        q: searchShows
      }
    })
      .then(response => {
        console.log(response.data[0])
        setShows(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <div className="list-container">
      <SearchBar
        handleSubmit={handleSubmit}
        handleChange={setValues}
        value={searchShows}
        name="searchShows"
      />
      <div className="data-list-container">
        {shows.map((show, i) => {
          // console.log(show.show)
          const { image, name, rating, id } = show.show
          return (
            <div className="data-container" key={i}>
              <Card
                key={id}
                image={image && image.original}
                msg={'Added show to Favorites'}
                body={{
                  external_id: id,
                  image: image && image.original,
                  name,
                  rating: rating.average || 0,
                  category_id: 4
                }}
              />
              <div>{show.name}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Shows