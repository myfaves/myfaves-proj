import React from "react"

const MovieVideos = ({ video }) => (
  <div>
    <iframe
      width="155"
      height="110"
      src={`https://www.youtube.com/embed/${video.key}`}
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen={true}
    ></iframe>
  </div>
)
export default MovieVideos
