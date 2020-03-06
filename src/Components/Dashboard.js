import React, { Component } from 'react'
import SearchBar from '../Components/SearchBar'
import axios from 'axios'

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

    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${this.movieKey}&query=${this.searchMovies}`)
    .then(data => {
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
      </div>
    )
  }
}

export default Dashboard;