import React from 'react'
import Movie from './Movie'
import '../Style/categories.css'

const CategoryList = (props) => {
  console.log(props.shows)
  return (
    <div className="list-container">
      <div className="movielist-container">
        {
          props.movies.map((movie, i) => {
            return (
              <div className="movie-card">
              <Movie key={i} image={movie.poster_path}/>
              </div>
            )
          })
        }
      </div>
      <div className="cardlist-container">
        {
          props.games.map((game, i) => {
            return (
              <div className="card"key={i}>
                <div className="card-image">
            {
              game.background_image == null ? <img src={'https://support.bluejeans.com/servlet/rtaImage?eid=ka12R000000kBsD&feoid=00N44000006xJka&refid=0EM2R000000h4fm'} alt="card-three" ></img> : <img src={game.background_image} alt="card-four"/> 
            }
                </div>
                <div className="card-title title">{game.name}</div>
              </div>
            )
            
          })
        }
      </div>
      <div className="cardlist-container">
        {
          props.songs.map((song, i) => {
            return (
              <div className="card"key={i}>
                <div className="card-image">
            {
              song.artist.picture == null ? <img src={'https://support.bluejeans.com/servlet/rtaImage?eid=ka12R000000kBsD&feoid=00N44000006xJka&refid=0EM2R000000h4fm'} alt="card-five" ></img> : <img src={song.artist.picture_medium} alt="card-six"/> 
            }
                </div>
                <div className="card-title title">{song.artist.name}</div>
              </div>
            )
          })
        }
      </div>
      <div className="cardlist-container">
        {props.shows &&props.shows.length > 0 &&
          props.shows.map((show, i) => {
            console.log(show.show.image)
            return (
              <div className="card"key={i}>
                <div className="card-image">
            {
              !show.show.image  ? <img src={'https://support.bluejeans.com/servlet/rtaImage?eid=ka12R000000kBsD&feoid=00N44000006xJka&refid=0EM2R000000h4fm'} alt="card-seven" ></img> : <img src={show.show.image.original} alt="card-eight"/> 
            }
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
    
  )
}

export default CategoryList;