import React from 'react'
import '../Style/picker.css'

const Picker = (props) => {
  return (
    <div className="picker-page">
      <h1>HOLD UP THERE COWPERSON...</h1>
      <p>Before you start. Pick a few of your favorites!</p>
      <div className="favorties-container">
        <div className="favorties-card">Movies</div>
        <br/>
        <div className="favorties-card">Games</div>
        <br/>
        <div className="favorties-card">Music</div>
        <br/>
        <div className="favorties-card">T.V. Show</div>
      </div>
    </div>
  )
}

export default Picker