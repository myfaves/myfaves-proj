import React, { useState } from "react"
import Movies from "./DataTypes/Movies"
import Games from "./DataTypes/Games"
import Songs from "./DataTypes/Songs"
import Shows from "./DataTypes/Shows"
<<<<<<< HEAD
import '../Style/dashboard.css'

const Dashboard = props => {
  const [movieToggle, setMovieToggle] = useState(true)
  const [gameToggle, setGameToggle] = useState(true)
  const [songToggle, setSongToggle] = useState(true)
  const [showToggle, setShowToggle] = useState(true)

  console.log(showToggle)
  return (
    <div className="dash-container">
=======

const Dashboard = props => {
  const [movieToggle, setMovieToggle] = useState(false)
  const [gameToggle, setGameToggle] = useState(false)
  const [songToggle, setSongToggle] = useState(false)
  const [showToggle, setShowToggle] = useState(false)

  console.log(showToggle)
  return (
    <div>
>>>>>>> master
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
