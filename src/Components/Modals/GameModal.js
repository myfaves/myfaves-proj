import React, { useState, useEffect } from "react"
import { REACT_APP_RAPID } from "../../.config.js"
import axios from "axios"

const GameModal = ({ closeModal, body }) => {
  const [{name, released, background_image, genres, website}, setGameData] = useState({})
  useEffect(() => {
    axios({
      method: "GET",
      url: `https://rawg-video-games-database.p.rapidapi.com/games/${body.external_id}`,
      headers: {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
        "x-rapidapi-key": REACT_APP_RAPID
      }
    })
      .then(({data}) => {
        console.log(data)
        setGameData(data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])
  return (
    <div className="modalDialog">
      <div>
        <button className="close-modal" onClick={closeModal}>
          X
        </button>
        <p>{name}</p>
          <p>{released}</p>
        <img src={`${background_image}`} />
        <ul>Genres:</ul>
        {genres &&
          genres.length > 0 &&
          genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
      </div>
    </div>
  )
}

export default GameModal
