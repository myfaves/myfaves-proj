import React, { useState, useEffect } from 'react'
import useInput from "../../hooks/useInput"
import SearchBar from "../SearchBar"
import Card from "../Card"
import axios from 'axios'
import "../../Style/datatypes.css"
import { REACT_APP_RAPID } from "../../.config.js"
require("dotenv").config()

const Songs = props => {
  const [songs, setSongs] = useState([])
  const [{ searchSongs }, setValues] = useInput({ searchGames: "" })
  useEffect(() => {
    axios({
      "method": "GET",
      "url": "https://deezerdevs-deezer.p.rapidapi.com/search",
      "headers": {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
        "x-rapidapi-key": REACT_APP_RAPID
      },
      "params": {
        "q": "The"
      }
    })
      .then((response) => {
        setSongs(response.data.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])
  const submitSong = (e) => {
    e.preventDefault()
    axios({
      "method": "GET",
      "url": "https://deezerdevs-deezer.p.rapidapi.com/search",
      "headers": {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
        "x-rapidapi-key": REACT_APP_RAPID
      }, "params": {
        "q": searchSongs
      }
    })
      .then((response) => {
        console.log(response.data.data)
        setSongs(response.data.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <div className="list-container">
      <h1>Music</h1>
      <SearchBar
        handleSubmit={submitSong}
        handleChange={setValues}
        value={searchSongs}
        name="searchSongs"
      />
      <div className="data-list-container">
        {songs.map((song, i) => {
          // console.log(song)
          const { title, rank, id, album } = song
          return (
            <div className="data-container" key={i}>
              <Card
                key={id}
                image={album.cover}
                msg={'Added song to Favorites'}
                body={{
                  external_id: id,
                  image: album.cover,
                  name: title,
                  rating: rank,
                  album_id: album.id,
                  category_id: 3
                }}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Songs