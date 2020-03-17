import React, { useState, useEffect } from "react"
import "../../Style/card.css"
import { REACT_APP_MOVIE } from "../../.config.js"
import axios from "axios"
import Shows from "../DataTypes/Shows"
import MovieVideos from "../ModalData/MovieVideos"
import "../../Style/modals.css";

const ShowModal = ({ closeModal, body }) => {
  const [showVideos, setShowVideos] = useState([])
  const [showData, setShowData] = useState({})
  const [currentVideo, setCurrentVideo] = useState(0)

  useEffect(() => {
    let id = body.external_id
    //axios call show
    axios
      .get(
        `https://api.themoviedb.org/3/tv/${id}?api_key=${REACT_APP_MOVIE}&language=en-US`
      )
      .then(show => {
        setShowData(show.data)
      })
      .then(
        axios
          .get(
            `https://api.themoviedb.org/3/tv/${id}/videos?api_key=${REACT_APP_MOVIE}&language=en-US`
          )
          .then(results => {
            setShowVideos(results.data.results)
          })
      )
  }, [body.external_id])

  const previous = () => {
    currentVideo === 0
      ? setCurrentVideo(showVideos.length - 1)
      : setCurrentVideo(currentVideo - 1)
  }

  const next = () => {
    currentVideo === showVideos.length - 1
      ? setCurrentVideo(0)
      : setCurrentVideo(currentVideo + 1)
  }

  return (
    <div id="modal">
      <div id="modal-container">
        <button className="close-modal" onClick={closeModal}>
          X
          </button>
        <div className="trailer-container">
          <img
            src={`https://image.tmdb.org/t/p/w500${showData.backdrop_path}`}
          />
          {showVideos.length > 0 && (
            <MovieVideos
              video={showVideos[currentVideo]}
              previous={previous}
              next={next}
              videoCount={showVideos.length}
            />
          )}
        </div>
        {showData.genres &&
          showData.genres.length > 0 &&
          showData.genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
      </div>
    </div>
  )
}

export default ShowModal
