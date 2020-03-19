import React, { useState, useEffect } from "react"
import "../../Style/modals.css";
import "../../Style/moviemodal.css";
import { REACT_APP_MOVIE } from "../../.config.js"
import axios from "axios"
import { toast } from "react-toastify"
import MovieVideos from "../ModalData/MovieVideos"

const MovieModal = ({ closeModal, body }) => {
  const [
    { name, release_date, genres, overview, poster_path },
    setMovieData
  ] = useState({})
  const [movieVideos, setMovieVideos] = useState([])
  const [currentVideo, setCurrentVideo] = useState(0)
  useEffect(() => {
    const id = body.external_id
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${REACT_APP_MOVIE}&language=en-US`
      )
      .then(({ data }) => {
        setMovieData(data)
      })
      .then(
        axios
          .get(
            `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${REACT_APP_MOVIE}&language=en-US`
          )
          .then(({ data }) => {
            setMovieVideos(data.results)
          })
      )
  }, [body.external_id])

  const previous = () => {
    currentVideo === 0
      ? setCurrentVideo(movieVideos.length - 1)
      : setCurrentVideo(currentVideo - 1)
  }

  const next = () => {
    currentVideo === movieVideos.length - 1
      ? setCurrentVideo(0)
      : setCurrentVideo(currentVideo + 1)
  }


  const addFavorite = () => {
    axios
      .post("/api/favorites", body)
      .then(res => {
        toast.success("Successfully Favorited")
      })
      .catch(err => console.log(err))
  }

  return (
    <div id="modal">
      <div id="modal-container">
        <button className="close-modal" onClick={closeModal}>
          X
        </button>
        <div className="information-container">
          <div className="modal-info-img">
            <img id="modal-container-img" src={`https://image.tmdb.org/t/p/w500${poster_path}`} />
            <div className="title">
              <h2>{body.name}</h2>
              <p><h4>Realeased:</h4>{release_date}</p>
              <h4>Genres: </h4>
              {genres &&
                genres.length > 0 &&
                genres.map(genre => <div key={genre.id}> {genre.name}</div>)}
            </div>
          </div>
          <br />
            <p className="modal-description"><h2>About:</h2>{overview}</p>
        </div>
        <br/>
        <div className="trailer-container">
          {movieVideos.length > 0 && (
            <MovieVideos
              video={movieVideos[currentVideo]}
              previous={previous}
              next={next}
              videoCount={movieVideos.length}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default MovieModal
