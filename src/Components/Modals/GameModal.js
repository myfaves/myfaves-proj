import React, { useState, useEffect } from "react"
import { REACT_APP_RAPID } from "../../.config.js"
import axios from "axios"
import GameStores from "../ModalData/GameStores"
import "../../Style/modals.css";

const GameModal = ({ closeModal, body }) => {
  const [
    { name, released, background_image, genres, website, stores },
    setGameData
  ] = useState({})
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
      .then(({ data }) => {
        console.log(data)
        setGameData(data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])
  return (
    <div id="modal">
      <div id="modal-container">
        <button className="close-modal" onClick={closeModal}>
          X
        </button>
        <div className="trailer-container">
          <a href={website && website} target="_blank">
            <img src={`${background_image}`} />
          </a>
        </div>
        <p>{name}</p>
        <p>{released}</p>
        <ul>Genres:</ul>
        {genres &&
          genres.length > 0 &&
          genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
        <div>Stores:</div>
        <div style={{ display: 'flex', JustifyContent: 'space-around', alignItems: 'center', width: "100%" }}>
          {stores &&
            stores.length > 0 &&
            stores.map(store => (
              <GameStores
                key={store.id}
                id={store.id}
                store={store.store}
                url={store.url}
                name={store.store.name}
              />
            )
            )}
        </div>
      </div>
    </div >
  )
}

export default GameModal
