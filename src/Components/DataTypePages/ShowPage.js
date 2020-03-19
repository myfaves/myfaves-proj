import React, { useState, useEffect } from "react"
import Shows from "../DataTypes/Shows"
import axios from 'axios'
import { connect } from "react-redux"
import List from '../Reusable/List'
import MostFavoritedShows from '../MostFavorited/MostFavoritedShows'
import useCheckUser from "../../hooks/useCheckUser"

const ShowPage = ({user, history}) => {
  useCheckUser(user, history.push)
  const [shows, setShows] = useState([])
  useEffect(() => {
    getFavorites()
  }, [])
  const getFavorites = () => {
    axios
      .get("/api/favorites/4")
      .then(results => {
        setShows(results.data)
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
      {<Shows />}
      <div>
        <h1>My Faves</h1>
        {shows && shows.length > 0 && (
          <List list={shows} removeFavorite={removeFavorite} />
        )}
      </div>
      <MostFavoritedShows />
    </div>
  )
}

const mapStateToProps = state => {
  const { user } = state
  return { user }
}

export default connect(mapStateToProps)(ShowPage)