import React, { useState, useEffect } from "react"
import Songs from "../DataTypes/Songs"
import axios from 'axios'
import { connect } from "react-redux"
import List from '../Reusable/List'
import MostFavoritedSongs from '../MostFavorited/MostFavoritedSongs'
import useCheckUser from "../../hooks/useCheckUser"

const SongPage = ({user, history}) => {
  useCheckUser(user, history.push)
  const [songs, setSongs] = useState([])
  useEffect(() => {
    getFavorites()
  }, [])
  const getFavorites = () => {
    axios
      .get("/api/favorites/3")
      .then(results => {
        setSongs(results.data)
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
      {<Songs />}
      <div>
        <h1>My Faves</h1>
        {songs && songs.length > 0 && (
          <List list={songs} removeFavorite={removeFavorite} />
        )}
      </div>
      <MostFavoritedSongs />
    </div>
  )
}

const mapStateToProps = state => {
  const { user } = state
  return { user }
}

export default connect(mapStateToProps)(SongPage)
