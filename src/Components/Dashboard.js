import React, { Component } from 'react'
import SearchBar from './SearchBar'
import MovieList from './MovieList'

class Dashboard extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      searchMovies: ''
    }
    this.movieKey = process.env.REACT_APP_MOVIE
  }

  handleSubmit = (e) => {
    e.preventDefault();

    fetch(`https://api.themoviedb.org/3/search/movie/?api_key=${this.movieKey}&query=${this.state.searchMovies}`)
    .then(data => data.json())
    .then(data => {
      console.log(data)
      this.setState({movies: [...data.results]})
    })
  }

  handleChange = (e) => {
    this.setState({searchMovies: e.target.value})
  }
  render(){
  
    return(
      <div>
        <SearchBar handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
        <MovieList movies={this.state.movies}/>
      </div>
    );
  }
}

export default Dashboard;