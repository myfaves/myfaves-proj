import React from "react"
import "../Style/card.css"
import axios from "axios"
import { toast } from 'react-toastify'

const Movie = ({ image, body, msg }) => {
  const addFavorite = () => {
    axios.post("/api/favorites", body).then(res => {

      toast.success(msg)
    })
      .catch(err => console.log(err))
  }

  return (
    <div className="card-container">
      <div className="card-container-top">
        <div className="card-image" onClick={addFavorite}>
          {!image ? (
            <img
              src=
              "https://support.bluejeans.com/servlet/rtaImage?eid=ka12R000000kBsD&feoid=00N44000006xJka&refid=0EM2R000000h4fm"

              alt="card-one"
            />
          ) : (
              <img
                src={
                  body.category_id === 1
                    ? `https://image.tmdb.org/t/p/w500${image}`
                    : `${image}`
                }
                alt="card-two"
              />
            )}
        </div>
      </div>
    </div>
  )
}

export default Movie
