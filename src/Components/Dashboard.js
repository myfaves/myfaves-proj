import React, { Component } from 'react'
import SearchBar from './SearchBar'
import CategoryList from './CategoryList'
import axios from 'axios'
import {REACT_APP_GAME, REACT_APP_MOVIE} from '../config'
require('dotenv').config()

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: [],
      searchMovies: '',
      games: [],
      movieKey: REACT_APP_MOVIE,
      gameKey: REACT_APP_GAME

    }

  }

  componentDidMount = () => {
    this.getGames();
  }

  handleSubmit = (e) => {
    e.preventDefault();

    fetch(`https://api.themoviedb.org/3/search/movie/?api_key=${this.state.movieKey}&query=${this.state.searchMovies}`)
    .then(data => data.json())
    .then(data => {
      console.log(data)
      this.setState({movies: [...data.results]})
    })
  }

getGames = () => {
  axios({
    "method":"GET",
    "url":"https://rawg-video-games-database.p.rapidapi.com/games",
    "headers":{
    "content-type":"application/octet-stream",
    "x-rapidapi-host":"rawg-video-games-database.p.rapidapi.com",
    "x-rapidapi-key": this.state.gameKey
    }
    })
    .then((response)=>{
      this.setState({games: response.data.results})
    })
    .catch((error)=>{
      console.log(error)
    })
}

  handleChange = (e) => {
    this.setState({searchMovies: e.target.value})
  }
  render(){

    return(
      <div>
        <SearchBar handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
        <CategoryList movies={this.state.movies} games={this.state.games}/>
      </div>
    );
  }
}

export default Dashboard;