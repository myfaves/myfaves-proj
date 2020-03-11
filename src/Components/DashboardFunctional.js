import React, { useState } from "react"
import Movies from "./DataTypes/Movies"
import Games from "./DataTypes/Games"
import Songs from "./DataTypes/Songs"
import Shows from "./DataTypes/Shows"

const Dashboard = props => {
  const [movieToggle, setMovieToggle] = useState(false)
  const [gameToggle, setGameToggle] = useState(false)
  const [songToggle, setSongToggle] = useState(false)
  const [showToggle, setShowToggle] = useState(false)

  console.log(showToggle)
  return (
    <div>
      {/* <input
        type="checkbox"
        name="showToggle"
        value={showToggle}
        onClick={e => setShowToggle(!showToggle)}
      /> */}
      {movieToggle && <Movies />}
      {gameToggle && <Games />}
      {songToggle && <Songs />}
      {showToggle && <Shows />}
    </div>
  )
}

export default Dashboard
