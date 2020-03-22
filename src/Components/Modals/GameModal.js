import React, { useState, useEffect } from "react"
import { REACT_APP_RAPID } from "../../.config.js"
import axios from "axios"
import GameStores from "../ModalData/GameStores"
import "../../Style/gamemodal.css";

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
    <div id="gamemodal">
      <div id="gamemodal-container">
        <button className="close-modal" style={{cursor: "pointer"}} onClick={closeModal}>
          X
        </button>
        <div className="trailer-container">
          <a href={website && website} target="_blank">
            <div className="game-img-container">
            <img id="game-modal-img" src={`${background_image}`} />
            </div>
          </a>
        </div>
        <div className="game-info">

        <div id="game-title">
        <p>{name}</p>
        </div>
        <div id="game-date">
        <p>Released: {released}</p>
        </div>
        <div id="game-genre">
        <h4>Genres:</h4>
        </div>
        </div>
        {genres &&
          genres.length > 0 &&
          genres.map(genre => <li id="game-genre"key={genre.id}>{genre.name}</li>)}
        <div id="game-stores">Stores:</div>
        <div id="stores" style={{ display: 'flex', JustifyContent: 'space-around', alignItems: 'center', width: "100%" }}>
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
