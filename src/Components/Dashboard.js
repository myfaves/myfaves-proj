import React, { Component } from 'react'
import SearchBar from './SearchBar'
import CategoryList from './CategoryList'
import axios from 'axios'

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: [],
      searchMovies: '',
      games: []
    }
    this.movieKey = process.env.REACT_APP_MOVIE
    // this.gameKey1 = process.env.REACT_APP_GAME1
    this.gameKey2 = process.env.REACT_APP_GAME2
  }

  componentDidMount = () => {
    this.getGames();
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

getGames = () => {
  axios({
    "method":"GET",
    "url":"https://rawg-video-games-database.p.rapidapi.com/games",
    "headers":{
    "content-type":"application/octet-stream",
    "x-rapidapi-host":"rawg-video-games-database.p.rapidapi.com",
    "x-rapidapi-key":"fd33264e0fmsh9171913f389298ap1c1896jsn26e79db88f45"
    }
    })
    .then((response)=>{
      // console.log(response.data.results)
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