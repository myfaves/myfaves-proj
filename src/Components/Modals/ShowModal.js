import React, { useState, useEffect } from "react"
import { REACT_APP_MOVIE } from "../../.config.js"
import axios from "axios"
import Shows from "../DataTypes/Shows"
import MovieVideos from "../ModalData/MovieVideos"
import '../../Style/showmodal.css';
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
      <svg className="close-modal" onClick={closeModal} xmlns="http://www.w3.org/2000/svg"><path d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z"/></svg>
      <div className="information-container">
      <div className="modal-info-img">
        <img id="modal-container-img"
          src={`https://image.tmdb.org/t/p/w500${showData.backdrop_path}`}
        />
        <div className="title">
          <h2>{showData.original_name}</h2>
          <p><h4>First Aired:</h4>{showData.first_air_date}</p>
          <p><h4>Seasons:</h4>{showData.number_of_seasons}</p>
          <h4>Genres:</h4>
          {showData.genres &&
            showData.genres.length > 0 &&
            showData.genres.map(genre => <div key={genre.id}>{genre.name}</div>)}
        </div>
        </div>
        <br />
        <p className="modal-description"><h2>About:</h2>{showData.overview}</p>
        </div>
        <br/>
        <div className="trailer-container">
          {showVideos.length > 0 && (
            <MovieVideos
              video={showVideos[currentVideo]}
              previous={previous}
              next={next}
              videoCount={showVideos.length}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default ShowModal
