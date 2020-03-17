import React, { useState, Fragment } from "react"
import "../Style/card.css"
import axios from "axios"
import { toast } from "react-toastify"
import MovieModal from "../Components/Modals/MovieModal"
import GameModal from "../Components/Modals/GameModal"
import SongModal from "../Components/Modals/SongModal"
import ShowModal from "../Components/Modals/ShowModal"

const Movie = ({ image, body, msg, favorite_id }) => {
  const [modal, setModal] = useState(false)

  // const getFavorites = () => {
  //   axios
  //     .get('/api/favorites')
  // }

  const addFavorite = () => {
    axios
      .post("/api/favorites", body)
      .then(res => {
        toast.success(msg)
      })
      .catch(err => console.log(err))
  }

  const removeFavorite = () => {
    axios
      .delete(`/api/favorites/${favorite_id}`)
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
        {favorite_id ? (
          <button onClick={removeFavorite}>Delete favorite</button>
        ) : (
          <svg
            // addFavorite
            onClick={addFavorite}
            id="add-favorite"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z" />
          </svg>
        )}
        <div
          className="card-image"
          onClick={e => {
            closeModal(e)
            setModal(true)
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
