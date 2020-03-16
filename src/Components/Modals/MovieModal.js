import React, { useState, useEffect } from "react"
import "../../Style/card.css"
import { REACT_APP_MOVIE } from "../../.config.js"
import axios from "axios"
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
  return (
    <div>
      <div className="modalDialog">
        <button className="close-modal" onClick={closeModal}>
          X
        </button>
        <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} />
        <p>{name}</p>
        <p>{release_date}</p>
        <ul>Genres:</ul>
        {genres &&
          genres.length > 0 &&
          genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
        {movieVideos.length > 0 && (
          <MovieVideos
            video={movieVideos[currentVideo]}
            previous={previous}
            next={next}
            videoCount={movieVideos.length}
          />
        )}
        <p>{overview}</p>
        <p></p>
      </div>
    </div>
  )
}

export default MovieModal
