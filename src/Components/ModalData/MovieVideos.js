import React from "react"

const MovieVideos = ({ currentVideo, video }) => (
  <div>
    <iframe
      width="155"
      height="110"
      src={`https://www.youtube.com/embed/${video.key}`}
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
)
export default MovieVideos
