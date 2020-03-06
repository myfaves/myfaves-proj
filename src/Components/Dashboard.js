import React, { useState, useEffect } from 'react'
import axios from 'axios'

const data = [{title: 'Thing', genre: 'Thing 2'}, {title: 'Thing 3', genre: 'Thing 4'}, {title: 'Thing 5', genre: 'Thing 6'}]

function Dashboard (props) {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        getMovies()
     }, [])

    const getMovies = () => {
        axios.get(data)
        .then(res => setMovies(res.data))
    }

  return (
    <div>
        {movies.map(movie => (
        <div>
          <p>{movie.title}</p>  
          <p>{movie.genre}</p>
        </div>  
        ))}
    </div>
  )
}

export default Dashboard;