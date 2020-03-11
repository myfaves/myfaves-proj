import React, { useState, useEffect } from "react"
import axios from 'axios'
import useAxios from '../hooks/useAxios'
import useCheckUser from '../hooks/useCheckUser'
import {connect} from 'react-redux'

const MyFavorites = ({user, history}) => {
  useCheckUser(user, history.push)
  const [movies, setMovies] = useState([])
  const [games, setGames] = useState([])
  const [music, setMusic] = useState([])
  const [shows, setShows] = useState([])

  useEffect(() => {
    axios.get('/api/movies').then(results => {
      setMovies(results.data)
    }).catch(err => console.log(err))
  }, [])

  useEffect(() => {
    axios.get('/api/games').then(results => {
      setGames(results.data)
    }).catch(err => console.log(err))
  }, [])

  useEffect(() => {
    axios.get('/api/music').then(results => {
      setMusic(results.data)
    }).catch(err => console.log(err))
  }, [])

  useEffect(() => {
    axios.get('/api/shows').then(results => {
      setShows(results.data)
    }).catch(err => console.log(err))
  }, [])
  return (
    <div>
      {movies && movies.length > 0 && (
        <div>
          <h1>Movies</h1>
          {movies.map(movie => (
            <div>
              <h2>{movie.name}</h2>
              <div>{movie.enre}</div>
              <div>{movie.description}</div>
              <div>{movie.image}</div>
            </div>
          ))}{" "}
        </div>
      )}
      {games && games.length > 0 && (
        <div>
          <h1>Games</h1>
          {games.map(game => (
            <div>
              <h2>{game.name}</h2>
              <div>{game.enre}</div>
              <div>{game.description}</div>
              <div>{game.image}</div>
            </div>
          ))}
        </div>
      )}
      {music && music.length > 0 && (
        <div>
          <h1>Music</h1>
          {music.map(music => (
            <div>
              <h2>{music.name}</h2>
              <div>{music.enre}</div>
              <div>{music.description}</div>
              <div>{music.image}</div>
            </div>
          ))}
        </div>
      )}
      {shows && shows.length > 0 && (
        <div>
          <h1>Shows</h1>
          {shows.map(game => (
            <div>
              <h2>{shows.name}</h2>
              <div>{shows.enre}</div>
              <div>{shows.description}</div>
              <div>{shows.image}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

const mapStateToProps = (state) => {
  const {user} = state
  return {user}
}

export default connect(mapStateToProps)(MyFavorites)
