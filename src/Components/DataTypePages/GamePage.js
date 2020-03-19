import React, { useState, useEffect } from "react"
import Games from "../DataTypes/Games"
import axios from 'axios'
import { connect } from "react-redux"
import List from '../Reusable/List'
import MostFavoritedGames from '../MostFavorited/MostFavoritedGames'
import useCheckUser from "../../hooks/useCheckUser"

const GamePage = ({user, history}) => {
  useCheckUser(user, history.push)
  const [games, setGames] = useState([])
  useEffect(() => {
    getFavorites()
  }, [])
  const getFavorites = () => {
    axios
      .get("/api/favorites/2")
      .then(results => {
        setGames(results.data)
      })
      .catch(err => console.log(err))
  }
  const removeFavorite = favorite_id => {
    axios
      .delete(`/api/favorites/${favorite_id}`)
      .then(() => {
        getFavorites()
      })
      .catch(err => console.log(err))
  }
  return (
    <div className="dash-container">
      {<Games />}
      <div>
        <h1>My Faves</h1>
        {games && games.length > 0 && (
          <List list={games} removeFavorite={removeFavorite} />
        )}
      </div>
      <MostFavoritedGames />
    </div>
  )
}

const mapStateToProps = state => {
  const { user } = state
  return { user }
}

export default connect(mapStateToProps)(GamePage)