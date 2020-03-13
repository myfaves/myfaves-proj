import React, { useState, useEffect } from "react";
import "../Style/card.css";
import { REACT_APP_MOVIE, REACT_APP_RAPID } from "../../.config.js";
import axios from "axios";
import Movie from "../Card";

const CardModal = ({ body }) => {
  const [movieVideos, setMovieVideos] = useState([]);
  const [movieData, setMovieData] = useState({});

  useEffect(() => {
    if (body.category_id === 1) {
      let id = body.external_id;
      //axios call movie
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${REACT_APP_MOVIE}&language=en-US`
        )
        .then(movie => {
          console.log(movie.data);
          setMovieData(movie.data);
        })
        .then(
          axios
            .get(
              `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${REACT_APP_MOVIE}&language=en-US`
            )
            .then(results => {
              console.log(results.data.results);
              setMovieVideos(results.data.results);
            })
        );
    }
    if (body.category_id === 2) {
      let id = body.external_id;
      //axios call games
    }
    if (body.category_id === 3) {
      let id = body.external_id;
      //axios call music
    }
    if (body.category_id === 4) {
      let id = body.external_id;
      //axios call shows
    }
  }, [body.external_id, body.category_id]);

  const [showClose, setClose] = useState(false);
  console.log(movieData);
  console.log(movieVideos);

  return (
    <div>
      <div className="modalDialog">
        <div>
          <button className="close-modal" onClick={() => setClose(!showClose)}>
            X
          </button>
          {movieVideos.length > 0 &&
            movieVideos.map((e, i) => (
              <iframe
                width="155"
                height="110"
                src={`https://www.youtube.com/embed/${e.key}`}
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            ))}
          <p>{movieData.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default CardModal;
