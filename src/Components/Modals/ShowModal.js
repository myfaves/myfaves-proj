import React, { useState, useEffect } from "react";
import "../../Style/card.css"
import { REACT_APP_RAPID } from "../../.config.js";
import axios from "axios";
import Shows from '../DataTypes/Shows'

const ShowModal = ({ body }) => {
  const [showData, setShowData] = useState({});

  useEffect(() => {
    if (body.category_id === 4) {
      let id = body.external_id;
      //axios call show
      axios({
        method: 'GET',
        url:`https://tvjan-tvmaze-v1.p.rapidapi.com/shows/${id}`,
        headers:{
        "content-type":"application/octet-stream",
        "x-rapidapi-host":"tvjan-tvmaze-v1.p.rapidapi.com",
        "x-rapidapi-key": REACT_APP_RAPID
        }
        })
        .then((show)=>{
          console.log(show.data)
          setShowData(show.data)
        })
        .catch((error)=>{
          console.log(error)
        })
    
    }

  }, [body.external_id, body.category_id]);

  const [showClose, setClose] = useState(false);
  console.log(showData);

  return (
    <div>
      <div className="modalDialog">
        <div>
          <button className="close-modal" onClick={() => setClose(!showClose)}>
            X
          </button>
          {showData.length > 0 &&
            showData.map((e, i) => (
              <iframe
                width="155"
                height="110"
                src={`https://www.imdb.com/video/playlistid=${e.externals.imdb}/embed?autoplay=true`}
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            ))}
          {showData.summary}
        </div>
      </div>
    </div>
  );
};

export default ShowModal;
