import React from 'react'
import Movie from './Movie'
import '../Style/categories.css'

const CategoryList = (props) => {
  console.log(props.games)
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
      <div className="gamelist-container">
        {
          props.games.map((game, i) => {
            return (
              <div className="game-card"key={i}>
                <div className="game-card-image">
            {
              game.background_image == null ? <img src={'https://support.bluejeans.com/servlet/rtaImage?eid=ka12R000000kBsD&feoid=00N44000006xJka&refid=0EM2R000000h4fm'} alt="card-three" ></img> : <img src={game.background_image} alt="card-four"/> 
            }
                </div>
                <div className="game-card-title title">{game.name}</div>
              </div>
            )
            
          })
        }
      </div>
    </div>
    
  )
}

export default CategoryList;