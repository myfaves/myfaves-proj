import React from 'react'
import { connect } from "react-redux"
import {setUser} from '../redux/reducer'
import { withRouter } from 'react-router-dom'
import '../Style/navbar.css'
import axios from 'axios'

const NavBar = (props) => {

  const openNav = () => {
    document.getElementById("sideNav").style.width = "220px";
  }
  
  const closeNav = () => {
    document.getElementById("sideNav").style.width = "0";
  }

  const logout = () => {
    axios.post('/auth/logout')
      .then(res => {
        props.setUser(res.data)
        closeNav()
        props.history.push('/login')
      }).catch(err => console.log(err))
  }


  return (
    <header className="nav-bar">
      <div className="login-logo" onClick={() => props.history.push('/')}>MYFaves</div>
      <nav id="desktop-nav">
        <div className="menu-content" onClick={() => props.history.push('/userprofile')}>Account</div>
        <div className="menu-content" onClick={() => props.history.push('/favorites')}>Favorites</div>
        <div className="menu-content">Friends</div>
        <div className="menu-content" onClick={logout}>Logout</div>
      </nav>
      <nav id="sideNav">
        <div className="menu-close" onClick={() => closeNav()}>X</div>
        <div className="menu-content-side" onClick={() => {
          closeNav()
          props.history.push('/userprofile')}}>Account</div>
        <div className="menu-content-side" onClick={() => {
          closeNav()
          props.history.push('/favorites')}}>Favorites</div>
        <div className="menu-content-side">Friends</div>
        <div className="menu-content-side" onClick={logout}>Logout</div>
      </nav>
      <svg xmlns="http://www.w3.org/2000/svg" className="ipc-icon ipc-icon-menu" viewBox="0 0 24 24" fill="currentColor" onClick={openNav}><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z"></path></svg>
    </header>
  )
}

const mapStateToProps = store => {
  const { user } = store
  return { user }
}

export default withRouter(connect(mapStateToProps, {setUser})(NavBar))