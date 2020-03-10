import React, {useState, useEffect} from 'react'
import useInput from "../../hooks/useInput"
import SearchBar from "../SearchBar"
import Movie from "../Movie"
import axios from 'axios'
import { REACT_APP_RAPID } from "../../.config.js"
require("dotenv").config()

const Songs = props => {
  const [games, setGames] = useState([])
  const [{ searchGames }, setValues] = useInput({ searchGames: "" })
  useEffect(() => {
    
  }, [])
}