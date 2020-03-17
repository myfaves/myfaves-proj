import React, { useState, Fragment } from "react"
import "../Style/card.css"
import axios from "axios"
import { toast } from "react-toastify"
import MovieModal from "../Components/Modals/MovieModal"
import GameModal from "../Components/Modals/GameModal"
import SongModal from "../Components/Modals/SongModal"
import ShowModal from "../Components/Modals/ShowModal"

const Movie = ({ image, body, msg }) => {
  const [modal, setModal] = useState(false)
  const addFavorite = () => {
    axios
      .post("/api/favorites", body)
      .then(res => {
        toast.success(msg)
      })
      .catch(err => console.log(err))
  }
  
  const getFavorites = () => {
    axios
    .get('/api/favorites')
  }

  const removeFavorite = () => {
    axios
      .delete(`/api/favorites/${favorite_id}`, body)
      .then(res => {
        toast.success(msg)
      })
      .catch(err => console.log(err))
  }

  const closeModal = e => {
    e.stopPropagation()
    setModal(false)
  }



  return (
    <div className="card-container">
      <div className="card-container-top">
        <div class="click">
          <span class="fa fa-star-o"></span>
          <div class="ring"></div>
          <div class="ring2"></div>
          <p class="info">Added to favourites!</p>
        </div>
        <div
          className="card-image"
          onClick={e => {
            closeModal(e)
            setModal(true)

            // addFavorite
          }}
        >
          {!image ? (
            <img
              src="https://support.bluejeans.com/servlet/rtaImage?eid=ka12R000000kBsD&feoid=00N44000006xJka&refid=0EM2R000000h4fm"
              alt="card-one"
            />
          ) : (
              <img
                src={image}
                //   body.category_id === 1
                //     ? `https://image.tmdb.org/t/p/w500${image}`
                //     : `${image}`
                // }
                alt="card-two"
              />
            )}
          {modal && (
            <Fragment>
              <div
                className="modal-container"
                onClick={e => e.stopPropagation()}
              >
                <div id="auth-modal">
                  {body.category_id === 1 && (
                    <MovieModal closeModal={closeModal} body={body} />
                  )}
                  {body.category_id === 2 && (
                    <GameModal closeModal={closeModal} body={body} />
                  )}
                  {body.category_id === 3 && (
                    <SongModal closeModal={closeModal} body={body} />
                  )}
                  {body.category_id === 4 && (
                    <ShowModal closeModal={closeModal} body={body} />
                  )}
                </div>
              </div>
            </Fragment>
          )}
        </div>
      </div>
    </div>
  )
}

export default Movie
