import React, { useState, Fragment } from "react"
import "../Style/card.css"
import axios from "axios"
import { toast } from "react-toastify"
import MovieModal from "../Components/Modals/MovieModal"
import GameModal from "../Components/Modals/GameModal"
import SongModal from "../Components/Modals/SongModal"
import ShowModal from "../Components/Modals/ShowModal"

const Movie = ({ image, body, msg }) => {
  const [showModal, setModal] = useState(false)
  const addFavorite = () => {
    axios
      .post("/api/favorites", body)
      .then(res => {
        toast.success(msg)
      })
      .catch(err => console.log(err))
  }

  return (
    <div className="card-container">
      <div className="card-container-top">
        <div
          className="card-image"
          onClick={() => {
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
          {showModal ? (
            <Fragment>
              <div className="modal-container">
                <div id="auth-modal">
                  {showModal && (
                    <>
                      {body.category_id === 1 && (
                        <MovieModal setModal={setModal} body={body} />
                      )}
                      {body.category_id === 2 && (
                        <GameModal setModal={setModal} body={body} />
                      )}
                      {body.category_id === 3 && (
                        <SongModal setModal={setModal} body={body} />
                      )}
                      {body.category_id === 4 && (
                        <ShowModal setModal={setModal} body={body} />
                      )}
                    </>
                  )}
                </div>
              </div>
            </Fragment>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default Movie
