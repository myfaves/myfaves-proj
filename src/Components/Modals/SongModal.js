import React, { useState, useEffect } from "react";
import "../../Style/card.css";
import { REACT_APP_RAPID } from "../../.config.js";
import axios from "axios";
import Songs from "../DataTypes/Songs";

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
        console.log(song.data)
        setSongData(song.data);
        setSongPreview(song.data.tracks.data)
      })
      .catch(error => {
        console.log(error);
      });
  }, [body.external_id]);

  return(
    <div>
    <div className="modalDialog">
      <div>
        <button className="close-modal" onClick={closeModal}>
          X
        </button>
        <div>
        <img
          src={songData.cover}
          />
          <audio
          controls
          src={songPreview.length > 0 && songPreview[0].preview}>
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
