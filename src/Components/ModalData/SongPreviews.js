import React from "react";

const SongPreviews = ({ title, preview, img, previous, next, songCount, songArtist, albumName }) => (
  <div className="song-modal">
    <div className="album-info">
      <span className="album-title">{title}</span>
      <span className="artist-name">{songArtist}</span>
      <span className="album-name">{albumName}</span>
    </div>
    <div>

    <img id="song-modal-img" src={img && img} />
    </div>
    <div class='wave'></div>
    <div class='wave'></div>
    <div class='wave'></div>
    <div className="audio">
      <audio controls src={preview}>
        Your browser does not support the <code>audio</code> element.
      </audio>
    </div>
    {songCount > 1 && (
      <div className="song-btns">
        <button id="prev" onClick={() => previous()}>
          {"<"}
        </button>
        <button id="next" onClick={() => next()}>
          {">"}
        </button>
      </div>
    )}
  </div>
);

export default SongPreviews;
