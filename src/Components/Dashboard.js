import React, { Component } from 'react'
import SearchBar from './SearchBar'
import CategoryList from './CategoryList'
import axios from 'axios'
import {REACT_APP_RAPID, REACT_APP_MOVIE} from '../config.js'

require('dotenv').config()

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: [],
      searchMovies: '',
      games: [],
      searchGames: '',
      songs: [],
      searchSongs: '',
      shows: [],
      searchShows: '',
      movieKey: REACT_APP_MOVIE,
      rapidKey: REACT_APP_RAPID

    }

  }

  handleSubmit = (e) => {
    e.preventDefault();

    fetch(`https://api.themoviedb.org/3/search/movie/?api_key=${this.state.movieKey}&query=${this.state.searchMovies}`)
    .then(data => data.json())
    .then(data => {
      console.log(data)
      this.setState({movies: [...data.results]})
    })
    axios({
      "method":"GET",
      "url":`https://rawg-video-games-database.p.rapidapi.com/games?search=${this.state.searchGames}`,
      "headers":{
      "content-type":"application/octet-stream",
      "x-rapidapi-host":"rawg-video-games-database.p.rapidapi.com",
      "x-rapidapi-key": this.state.rapidKey
      }
      })
      .then((response)=>{
        this.setState({games: response.data.results})
      })
      .catch((error)=>{
        console.log(error)
      })
      axios({
        "method":"GET",
        "url":"https://deezerdevs-deezer.p.rapidapi.com/search",
        "headers":{
        "content-type":"application/octet-stream",
        "x-rapidapi-host":"deezerdevs-deezer.p.rapidapi.com",
        "x-rapidapi-key": this.state.rapidKey
        },"params":{
        "q": this.state.searchSongs
        }
        })
        .then((response)=>{
          console.log(response)
          this.setState({songs: response.data.data})
        })
        .catch((error)=>{
          console.log(error)
        })

        axios({
          "method":"GET",
          "url":"https://tvjan-tvmaze-v1.p.rapidapi.com/search/shows",
          "headers":{
          "content-type":"application/octet-stream",
          "x-rapidapi-host":"tvjan-tvmaze-v1.p.rapidapi.com",
          "x-rapidapi-key":this.state.rapidKey
          },"params":{
          "q": this.state.searchShows
          }
          })
          .then((response)=>{
            console.log(response.data[0])
            this.setState({shows: response.data})
          })
          .catch((error)=>{
            console.log(error)
          })
      
  }

  handleChange = (e) => {
    this.setState({searchMovies: e.target.value, searchGames: e.target.value, searchSongs: e.target.value, searchShows: e.target.value})
  }
  render(){

    return(
      <div>
        <SearchBar handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
        <CategoryList movies={this.state.movies} games={this.state.games} songs={this.state.songs} shows={this.state.shows}/>
      </div>
    );
  }
}

export default Dashboard;