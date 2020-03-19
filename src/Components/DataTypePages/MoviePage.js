import React, { useState, useEffect } from "react"
import Movies from "../DataTypes/Movies"
import axios from 'axios'
import { connect } from "react-redux"
import List from '../Reusable/List'
import MostFavoritedMovies from '../MostFavorited/MostFavoritedMovies'
import useCheckUser from "../../hooks/useCheckUser"

const MoviePage = ({user, history}) => {
  useCheckUser(user, history.push)
  const [movies, setMovies] = useState([])
  useEffect(() => {
    getFavorites()
  }, [])
  const getFavorites = () => {
    axios
      .get("/api/favorites/1")
      .then(results => {
        setMovies(results.data)
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
      {<Movies />}
      <div>
        <h1>My Faves</h1>
        {movies && movies.length > 0 && (
          <List list={movies} 
          favorite={true}
          removeFavorite={removeFavorite} />
        )}
      </div>
      <MostFavoritedMovies />
    </div>
  )
}

const mapStateToProps = state => {
  const { user } = state
  return { user }
}

export default connect(mapStateToProps)(MoviePage)