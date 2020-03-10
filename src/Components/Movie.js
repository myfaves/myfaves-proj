import React from "react"
import "../Style/categories.css"
import axios from "axios"
import {toast} from 'react-toastify'

const Movie = ({image, body}) => {
  const addMovie = () => {
    axios.post('/api/movies', body).then(res => {
      
      toast.success('Added movie to Favorites')
    })
    .catch(err => console.log(err))
  }

  return (
    <div className="movie-card-image">
      {!image ? (
        <img
          src={
            "https://support.bluejeans.com/servlet/rtaImage?eid=ka12R000000kBsD&feoid=00N44000006xJka&refid=0EM2R000000h4fm"
          }
          alt="card-one"
          style={{ width: 300, height: 250 }}
        ></img>
      ) : (
        <img
          src={
            body.category_id === 1
              ? `https://image.tmdb.org/t/p/w500${image}`
              : `${image}`
          }
          alt="card-two"
          style={{ width: 300, height: 250 }}
        />
      )}
      <button onClick={addMovie}>Favorite</button>
    </div>
  )
}

export default Movie
