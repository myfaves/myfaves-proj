import React, { useState } from "react";
import "../Style/card.css";
import axios from "axios";
import { toast } from "react-toastify";
import CardModal from "./Modals/CardModal";
import ShowModal from "./Modals/ShowModal";

const Movie = ({ image, body, msg }) => {
  const addFavorite = () => {
    axios
      .post("/api/favorites", body)
      .then(res => {
        toast.success(msg);
      })
      .catch(err => console.log(err));
    };
    
    const [showModal, setModal] = useState(false);

  return (
    <div className="card-container">
      <div className="card-container-top">
        <div
          className="card-image"
          onClick={() => {
            setModal(!showModal);

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
            <React.Fragment>
              <div className="modal-container">
                <div id="auth-modal">
                  {/* <CardModal body={body}/> */}
                  <ShowModal body={body}/>
                  
                </div>
              </div>
              
            </React.Fragment>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Movie;
