import React from "react"

const MovieVideos = ({ video, previous, next, videoCount }) => (
  <div>
    <iframe
      width="155"
      height="110"
      src={`https://www.youtube.com/embed/${video.key}`}
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen={true}
    ></iframe>
    {videoCount > 1 && (
      <div>
        <button onClick={() => previous()}>Previous</button>
        <button onClick={() => next()}>Next</button>
      </div>
    )}
  </div>
)
export default MovieVideos
