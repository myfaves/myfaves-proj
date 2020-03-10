import React from 'react'
import '../Style/categories.css'

const Movie = (props) => {
    return (
        <div className="movie-card-image">
            {
               props.image == null ? <img src={'https://support.bluejeans.com/servlet/rtaImage?eid=ka12R000000kBsD&feoid=00N44000006xJka&refid=0EM2R000000h4fm'} alt="card-one" style={{width: 300, height: 250}} ></img> : <img src={`https://image.tmdb.org/t/p/w500${props.image}`} alt="card-two" style={{width: 300, height: 250}}/> 
            }
        </div>
    )
}

export default Movie;