import React from "react"

const SongPreviews = ({ title, preview, img, previous, next, songCount }) => (
  <div>
    
    <h2>{title}</h2>
    <img src={img && img} />
    <audio controls src={preview}>
      Your browser does not support the <code>audio</code> element.
    </audio>
    {songCount > 1 && (
      <div>
        <button onClick={() => previous()}>Previous</button>
        <button onClick={() => next()}>Next</button>
      </div>
    )}
  </div>
)

export default SongPreviews
