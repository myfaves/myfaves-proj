import React from "react"
import {
  FaPlaystation,
  FaXbox,
  FaSteam,
  FaApple,
  FaGooglePlay,
  FaNintendoSwitch
} from "react-icons/fa"
//GoG

const GameStores = ({ id, store, url, name }) => {
  return (
    <div>
      <a
        href={url && url}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          textDecoration: "none",
          hover: { textDecoration: "none" },
          focus: { textDecoration: "none" }
        }}
      >
      {name === "Steam" ||
      name === "Xbox 360 Store" ||
      name === "Xbox Store" ||
      name === "App Store" ||
      name === "Google Play" ||
      name === "PlayStation Store" ||
      name === "Nintendo Store" && (
        <span>
          {name === "Steam" && <FaSteam size={25} />}
          {name === "Nintendo Store" && <FaNintendoSwitch color='red' size={25} />}
          {name === "App Store" && <FaApple size={25} color="#aaa9ad" />}
          {name === "Google Play" && <FaGooglePlay size={25} color="#4285F4" />}
          {name === "PlayStation Store" && (
            <FaPlaystation color="red" size={25} />
          )}
          {(name === "Xbox 360 Store" || name === "Xbox Store") && (
            <FaXbox size={25} color="green" />
          )}
        </span>
      ) 
      // : (
      //   <span>{name}</span>
      // )
      }
      </a>
    </div>
  )
}
export default GameStores
