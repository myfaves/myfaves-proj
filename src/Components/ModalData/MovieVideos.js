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
      <div className="previous-next">
        <svg onClick={() => previous()} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/></svg>
        <svg onClick={() => next()}
        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg>
      </div>
    )}
  </div>
)
export default MovieVideos