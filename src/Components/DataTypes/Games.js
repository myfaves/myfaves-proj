import React, { useState, useEffect } from "react"
import useInput from "../../hooks/useInput"
import SearchBar from "../SearchBar"
import Card from "../Card"
import axios from "axios"
import { REACT_APP_RAPID } from "../../.config.js"
require("dotenv").config()

const Games = props => {
  const [games, setGames] = useState([])
  const [{ searchGames }, setValues] = useInput({ searchGames: "" })

  useEffect(() => {
    axios({
      method: "GET",
      url: "https://rawg-video-games-database.p.rapidapi.com/games",
      headers: {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
        "x-rapidapi-key": REACT_APP_RAPID
      }
    })
      .then(response => {
        setGames(response.data.results)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  const submitGame = e => {
    e.preventDefault()
    axios({
      method: "GET",
      url: `https://rawg-video-games-database.p.rapidapi.com/games?search=${searchGames}`,
      headers: {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
        "x-rapidapi-key": REACT_APP_RAPID
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
            // console.log(game)
            const { background_image, name, metacritic, id } = game
            return (
              <div className="game-container" key={i}>
                <Card
                  key={i}
                  image={background_image}
                  url={'/api/movies'}
                  msg={'Added movie to Favorites'}
                  body={{
                    external_id: id,
                    image: background_image,
                    name,
                    rating: metacritic,
                    category_id: 2
                  }}
                />
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
