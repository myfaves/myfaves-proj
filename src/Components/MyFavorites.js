import React, { useState, useEffect } from "react"
import axios from "axios"
import useCheckUser from "../hooks/useCheckUser"
import { connect } from "react-redux"
import "../Style/myfavorites.css"
import List from "./Reusable/List"

const MyFavorites = ({ user, history }) => {
  useCheckUser(user, history.push)
  const [{ videogames, movies, songs, shows }, setFavorites] = useState({
    videogames: [],
    movies: [],
    songs: [],
    shows: []
  })
  useEffect(() => {
    getFavorites()
  }, [])
  const getFavorites = () => {
    axios
    .get("/api/favorites")
    .then(results => {
      setFavorites(results.data)
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
      {/* <div className="data-list-container"> */}
        <div id="movies">
          <h1>Movies</h1>
          {movies && movies.length > 0 && (
            <List list={movies} removeFavorite={removeFavorite} />
          )}
        </div>
      {/* </div> */}
      {/* <div className="fave-list-container"> */}
        <div id="games">
          <h1>Games</h1>
          {videogames && videogames.length > 0 && (
            <List list={videogames} removeFavorite={removeFavorite} />
          )}
        </div>
      {/* </div> */}
      {/* <div className="fave-list-container"> */}
        <div id="music">
          <h1>Music</h1>
          {songs && songs.length > 0 && (
            <List list={songs} removeFavorite={removeFavorite} />
          )}
        </div>
      {/* </div> */}
      {/* <div className="fave-list-container"> */}
        <div id="shows">
          <h1>Shows</h1>
          {shows && shows.length > 0 && (
            <List list={shows} removeFavorite={removeFavorite} />
          )}
        </div>
      {/* </div> */}
      {/* <ul>
        <li>
          <a href="#movies">Movies</a>
        </li>
        <li>
          <a href="#games">Games</a>
        </li>
        <li>
          <a href="#music">Music</a>
        </li>
        <li>
          <a href="#shows">Shows</a>
        </li>
      </ul> */}
    </div>
  )
}

const mapStateToProps = state => {
  const { user } = state
  return { user }
}

export default connect(mapStateToProps)(MyFavorites)
