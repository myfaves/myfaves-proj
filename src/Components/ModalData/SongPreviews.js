import React from "react"

const SongPreviews = ({ title, preview, img, previous, next, songCount }) => (
  <div className="song-contain">
    <div className="song-container"> 
    <div className="music-player">
    <h2>{title}</h2>
    <div className="cover">

    <img src={img && img} />
    </div>
    <audio controls src={preview}>
      Your browser does not support the <code>audio</code> element.
    </audio>
    {songCount > 1 && (
      <div>
        <button className="prev-btn"onClick={() => previous()}>Previous</button>
        <button className="next-btn"onClick={() => next()}>Next</button>
      </div>
    )}
    </div>
    </div>
  </div>
)

export default SongPreviews
