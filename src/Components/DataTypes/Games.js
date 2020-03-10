import React, { useState, useEffect } from "react"
import useInput from "../../hooks/useInput"
import SearchBar from "../SearchBar"
import Movie from "../Movie"
import axios from 'axios'
import { REACT_APP_GAME } from "../../.config.js"
require("dotenv").config()

const Games = props => {
  const [games, setGames] = useState([])
  const [{ searchGames }, setValues] = useInput({ searchGames: "" })
  const gameKey = REACT_APP_GAME

  useEffect(() => {
    axios({
      "method":"GET",
      "url":"https://rawg-video-games-database.p.rapidapi.com/games",
      "headers":{
      "content-type":"application/octet-stream",
      "x-rapidapi-host":"rawg-video-games-database.p.rapidapi.com",
      "x-rapidapi-key": gameKey
      }
      })
      .then((response)=>{
        setGames(response.data.results)
      })
      .catch((error)=>{
        console.log(error)
      })
  }, [])

  const submitGame = e => {
    e.preventDefault()
    axios({
      method: "GET",
      url: `https://api.rawg.io/api/games?search=${searchGames}`,
      headers: {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
        "x-rapidapi-key": gameKey
      }
    })
      .then(response => {
        setGames(response.data.results)
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <div>
      <SearchBar
        handleSubmit={submitGame}
        handleChange={setValues}
        value={searchGames}
        name="searchGames"
      />
      <div className="list-container">
        <div className="gamelist-container">
          {games.map((game, i) => {
            return (
              <div className="game-container" key={i}>
                <div>
                  {game.background_image == null ? (
                    <img
                      src={
                        "https://jschof.com/wp-content/uploads/2019/10/output-onlinepngtools-1024x943.png"
                      }
                      alt="card-three"
                      style={{ width: 300, height: 250 }}
                    ></img>
                  ) : (
                    <img
                      src={game.background_image}
                      alt="card-four"
                      style={{ width: 300, height: 250 }}
                    />
                  )}
                </div>
                <div>{game.name}</div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Games
