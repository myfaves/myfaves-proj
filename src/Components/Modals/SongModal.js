import React, { useState, useEffect } from "react";
import "../../Style/card.css";
import { REACT_APP_RAPID } from "../../.config.js";
import axios from "axios";

const SongModal = ({ closeModal, body }) => {
  const [songData, setSongData] = useState({});
  const [songPreview, setSongPreview] = useState([]);

  useEffect(() => {
    let id = body.external_id;

    axios({
      "method": "GET",
      "url": `https://deezerdevs-deezer.p.rapidapi.com/track/${id}`,
      "headers": {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
        "x-rapidapi-key": REACT_APP_RAPID
      }
    })
      .then(song => {
        setSongData(song.data);
        setSongPreview(song.data.preview)
      })
      .catch(error => {
        console.log(error);
      });
  }, [body.external_id]);
  console.log(songData)
  return(
    <div>
    <div className="modalDialog">
      <div>
        <button className="close-modal" onClick={closeModal}>
          X
        </button>
        <div>
          <p>{songData.title}</p>
        <img
          src={songData.album && songData.album.cover}
          />
          <audio
          controls
          src={songPreview}>
            Your browser does not support the <code>audio</code> element.
          </audio>
        </div>
        <h1>{songData.title}</h1>
        <h2>{songData.genres && songData.genres.data.length > 0 && songData.genres.data[0].name}</h2>
      </div>
    </div>
  </div> 
  ) 
};

export default SongModal;
