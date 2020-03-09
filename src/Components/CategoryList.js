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
              <Movie key={i} image={movie.poster_path}/>
            )
          })
        }
      </div>
      <div className="gamelist-container">
        {
          props.games.map((game, i) => {
            // console.log(game[i])
            return (
              <div key={i}>
                <div className="game-container">
            {
              game.background_image == null ? <img src={'https://jschof.com/wp-content/uploads/2019/10/output-onlinepngtools-1024x943.png'} alt="card-three" style={{width: 300, height: 250}} ></img> : <img src={game.background_image} alt="card-four" style={{width: 300, height: 250}}/> 
            }
                </div>
            <p>{game.name}</p>
              </div>
            )
          })
        }
      </div>
    </div>
    
  )
}

export default CategoryList;