import React, { useState, useEffect } from "react"
import axios from 'axios'
import useAxios from '../hooks/useAxios'
import useCheckUser from '../hooks/useCheckUser'
import { connect } from 'react-redux'
import '../Style/myfavorites.css'

const MyFavorites = ({ user, history }) => {
  useCheckUser(user, history.push)
  const [favorites, setFavorties] = useState([])

  // SAFE KEEPING
  // const [games, setGames] = useState([])
  // const [music, setMusic] = useState([])
  // const [shows, setShows] = useState([])

  // useEffect(() => {
  //   axios.get('/api/favorites').then(results => {
  //     console.log(results.data)
  //     setFavorties(results.data)
  //   }).catch(err => console.log(err))
  // }, [])

  // useEffect(() => {
  //   axios.get('/api/games').then(results => {
  //     setGames(results.data)
  //   }).catch(err => console.log(err))
  // }, [])

  // useEffect(() => {
  //   axios.get('/api/music').then(results => {
  //     setMusic(results.data)
  //   }).catch(err => console.log(err))
  // }, [])

  // useEffect(() => {
  //   axios.get('/api/shows').then(results => {
  //     setShows(results.data)
  //   }).catch(err => console.log(err))
  // }, [])

  return (
    <div className="fave-container">
        <div className="fave-list-container">
          {/* {favorites.Movies && favorites.Movies.length > 0 && ( */}
            <div id="movies">
                  <h1>Movies</h1>
                {/* {favorites.Movies.map(movie => (
                  <div key={movie.id}>
                  <h1>Movies</h1>
                  <div><img src={movie.image} alt="pic" /></div>
                  <h2>{movie.name}</h2>
                  <div>{movie.genre}</div>
                  <div>{movie.description}</div>
                </div>
              ))}{" "} */}
            </div>
      </div>
      {/* {games && games.length > 0 && ( */}
        <div className="fave-list-container">
          <div id="games">
            <h1>Games</h1>
          </div>
        {/* {games.map(game => (
          <div id="games">
          <h1>Games</h1>
          <h2>{game.name}</h2>
          <div>{game.genre}</div>
          <div>{game.description}</div>
          <div>{game.image}</div>
          </div>
          ))}
          </div>
        )} */}
          </div>
          {/* {music && music.length > 0 && ( */}
            <div className="fave-list-container">
              <div id="music">
                <h1>Music</h1>
              </div>
            {/* {music.map(music => (
              <div id="music">
              <h1>Music</h1>
              <h2>{music.name}</h2>
              <div>{music.genre}</div>
              <div>{music.description}</div>
              <div>{music.image}</div>
              </div>
              ))}
              </div>
            )} */}
              </div>
              {/* {shows && shows.length > 0 && ( */}
                <div className="fave-list-container">
                  <div id="shows">
                    <h1>Shows</h1>
                  </div>
                {/* {shows.map(show => (
                  <div id="shows">
                  <h1>Shows</h1>
                  <h2>{show.name}</h2>
                  <div>{show.genre}</div>
                  <div>{show.description}</div>
                  <div>{show.image}</div>
                  </div>
                  ))}
                  </div>
                )} */}
                </div>
                <ul>
                  <li ><a href="#movies">Movies</a></li>
                  <li ><a href="#games">Games</a></li>
                  <li ><a href="#music">Music</a></li>
                  <li ><a href="#shows">Shows</a></li>
                </ul>
            </div>
          )}


const mapStateToProps = (state) => {
  const { user } = state
  return { user }
} 

export default connect(mapStateToProps)(MyFavorites)

