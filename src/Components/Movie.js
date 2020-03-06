import React from 'react'

const Movie = (props) => {
    return (
        <div>
            {
               props.image == null ? <img src={`https://jschof.com/wp-content/uploads/2019/10/output-onlinepngtools-1024x943.png`} alt="card-one" style={{width: 300, height: 300}} ></img> : <img src={`https://image.tmdb.org/t/p/w500${props.image}`} alt="card-two" style={{width: 300, height: 300}}/> 
            }
        </div>
    )
}

export default Movie;