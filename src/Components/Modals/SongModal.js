import React, { useState, useEffect } from "react"
import "../../Style/card.css"
import { REACT_APP_RAPID } from "../../.config.js"
import axios from "axios"
import SongPreviews from "../ModalData/SongPreviews"
import "../../Style/songmodal.css"

const SongModal = ({ closeModal, body }) => {
  const [songData, setSongData] = useState({})
  const [albumData, setAlbumData] = useState({})
  const [albumTracks, setAlbumTracks] = useState([])
  const [currentTrack, setCurrentTrack] = useState(0)

  useEffect(() => {
    let id = body.external_id
    axios({
      method: "GET",
      url: `https://deezerdevs-deezer.p.rapidapi.com/track/${id}`,
      headers: {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
        "x-rapidapi-key": REACT_APP_RAPID
      }
    })
      .then(song => {
        setSongData(song.data)
        axios({
          method: "GET",
          url: `https://deezerdevs-deezer.p.rapidapi.com/album/${body.album_id}`,
          headers: {
            "content-type": "application/octet-stream",
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
            "x-rapidapi-key": REACT_APP_RAPID
          }
        })
          .then(album => {
            const currentIndex = album.data.tracks.data.findIndex(
              track => +track.id === +id
            )
            setAlbumData(album.data)
            setAlbumTracks(album.data.tracks.data)
            setCurrentTrack(currentIndex)
          })
          .catch(error => {
            console.log(error)
          })
      })
      .catch(error => {
        console.log(error)
      })
  }, [body.external_id, body.album_id])
  const previous = () => {
    currentTrack === 0
      ? setCurrentTrack(albumTracks.length - 1)
      : setCurrentTrack(currentTrack - 1)
  }

  const next = () => {
    currentTrack === albumTracks.length - 1
      ? setCurrentTrack(0)
      : setCurrentTrack(currentTrack + 1)
  }
  return (
    <div id="songmodal">
      <div id="songmodal-container">
        <div>
          <button className="close-modal" style={{cursor: "pointer"}}onClick={closeModal}>
            X
          </button>
          {albumTracks.length > 0 && (
            <SongPreviews
              title={albumTracks[currentTrack].title}
              preview={albumTracks[currentTrack].preview}
              previous={previous}
              next={next}
              img={albumData.cover}
              songCount={albumTracks.length}
            />
          )}
          <h2 className="">
            {songData.genres &&
              songData.genres.data.length > 0 &&
              songData.genres.data[0].name}
          </h2>
        </div>
      </div>
    </div>
  )
}

export default SongModal
