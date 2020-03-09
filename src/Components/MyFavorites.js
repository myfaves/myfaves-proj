import React, { useState, useEffect } from "react"
import axios from 'axios'
import useAxios from '../hooks/useAxios'
import useCheckUser from '../hooks/useCheckUser'
import {connect} from 'react-redux'

const MyFavorites = ({user, history}) => {
  useCheckUser(user, history.push)
  const [movies, setMovies] = useState([])
  const [games, setGames] = useState([])
  useEffect(() => {
    axios.get('/api/movies').then(results => {
      setMovies(results.data)
    }).catch(err => console.log(err))
  }, [])
  return (
    <div>
      {movies && movies.length > 0 && (
        <div>
          <h1>Movies</h1>
          {movies.map(movie => (
            <div>
              <h2>{movie.movie_name}</h2>
              <h2>{movie.movie_genre}</h2>
              <h2>{movie.description}</h2>
              <h2>{movie.poster_path}</h2>
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
