import React, { useState, useEffect } from "react"
import "../../Style/card.css"
import { REACT_APP_MOVIE } from "../../.config.js"
import axios from "axios"
import MovieVideos from "../ModalData/MovieVideos"

const MovieModal = ({ setModal, body }) => {
  const [movieVideos, setMovieVideos] = useState([])
  const [movieData, setMovieData] = useState({})
  const [currentVideo, setCurrentVideo] = useState(0)
  const [showClose, setClose] = useState(false)
  useEffect(() => {}, [])
  useEffect(() => {
    const id = body.external_id
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${REACT_APP_MOVIE}&language=en-US`
      )
      .then(movie => {
        setMovieData(movie.data)
      })
      .then(
        axios
          .get(
            `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${REACT_APP_MOVIE}&language=en-US`
          )
          .then(results => {
            setMovieVideos(results.data.results)
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
  console.log(movieData)
  return (
    <div>
      <div className="modalDialog">
        <div>
          <button className="close-modal" onClick={() => setModal(false)}>
            X
          </button>
          <img
            src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`}
          />
          <p>{movieData.title}</p>
          <p>{movieData.release_date}</p>
          <ul>Genres:</ul>
          {movieData.genres &&
            movieData.genres.length > 0 &&
            movieData.genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
          {movieVideos.length > 0 && (
            <div>
              <MovieVideos
                currentVideo={currentVideo}
                video={movieVideos[currentVideo]}
              />
              <button onClick={() => previous()}>Previous</button>
              <button onClick={() => next()}>Next</button>
            </div>
          )}
          <p>{movieData.overview}</p>
          <p></p>
        </div>
      </div>
    </div>
  )
}

export default MovieModal
