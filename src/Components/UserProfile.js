import React, { useState } from "react"
import { connect } from "react-redux"
import Input from "./Reusable/Input"
import useCheckUser from "../hooks/useCheckUser"
import useInput from "../hooks/useInput"
import {toast} from 'react-toastify'
import axios from 'axios'
import {setUser} from '../redux/reducer'
import '../Style/profile.css'
import movielogo from '../images/movielogo.png'
import gameslogo from '../images/gameslogo.png'
import musiclogo from '../images/musiclogo.png'
import showslogo from '../images/showslogo.png'

const UserProfile = ({ user, history, setUser }) => {
  useCheckUser(user, history.push)
  const [{ first_name, last_name, age, email }, setValues] = useInput({
    first_name: user.first_name,
    last_name: user.last_name,
    age: user.age,
    email: user.email
  })
  const [editToggle, setEditToggle] = useState(false)
  const updateProfile = e => {
    e.preventDefault()
    console.log(
      `First Name: ${first_name}, Last Name: ${last_name}, Email: ${email}, Age: ${age}`
    )
    setEditToggle(false)
    //submit functionality to come
    axios.put('/api/user', {first_name, last_name, age, email}).then(results => {
      setUser(results.data)
    }).catch(err => toast.error(err.data))
    toast.success('profile updated successfully')
  }
  return (
    <div className="profile-container">
      <div className="profile">
    <div className="profile-image">
      <img src="https://i.imgur.com/pZVRyFK.png" alt="pfp"/>
    </div>
      {!editToggle ? (
        <div className="profile-username">
          <h1>Name: {first_name} {last_name}</h1>
          <h1>Age: {age}</h1>
          <h1>Email: {email}</h1>
          </div>
      ) : (
        <form className="profile-username" onSubmit={updateProfile}>
          <Input
            name="first_name"
            value={first_name}
            placeHolder="First Name"
            handleChange={setValues}
          />
          <Input
            name="last_name"
            value={last_name}
            placeHolder="Last Name"
            handleChange={setValues}
          />
          <Input
            name="age"
            value={age}
            placeHolder="Age"
            handleChange={setValues}
          />
          <Input
            name="email"
            value={email}
            placeHolder="Email"
            handleChange={setValues}
          />
          <button className="profile-edit-btn" style={{cursor: "pointer"}} type="submit">Save</button>
        </form>
      )}
      <button className="profile-edit-btn" style={{cursor: "pointer"}}onClick={() => setEditToggle(!editToggle)}>
        {!editToggle ? "Edit Profile" : "Cancel"}{" "}
      </button>
      <div className="profile-bio">
        <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo	consequat. Rllamco laboris nisi ut aliquip ex ea commodo consequat sed do eiusmod tempor incididunt ut labore et dolore magna aliqua laboris nisi ut aliquip ex ea commodo consequat sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button className="profile-edit-btn" style={{cursor: "pointer"}}>Edit Bio</button>
      </div>
      <div className="interest-container">
        <div className="interest-card">
          <div className="interest-img">
            <img src={movielogo} />
          </div>
          <div className="interest-content">
            <div className="top-interest">
              <h3>Top 3</h3>
              <span>1</span>
              <span>2</span>
              <span>3</span>
            </div>
          </div>
        </div>
        <div className="interest-card">
          <div className="interest-img">
            <img src={gameslogo} />
          </div>
          <div className="interest-content">
            <div className="top-interest">
              <h3>Top 3</h3>
              <span>1</span>
              <span>2</span>
              <span>3</span>
            </div>
          </div>
        </div>
        <div className="interest-card">
          <div className="interest-img">
            <img src={musiclogo} />
          </div>
          <div className="interest-content">
            <div className="top-interest">
              <h3>Top 3</h3>
              <span>1</span>
              <span>2</span>
              <span>3</span>
            </div>
          </div>
        </div>
        <div className="interest-card">
          <div className="interest-img">
            <img src={showslogo} />
          </div>
          <div className="interest-content">
            <div className="top-interest">
              <h3>Top 3</h3>
              <span>1</span>
              <span>2</span>
              <span>3</span>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

const mapStateToProps = store => {
  const { user } = store
  return { user }
}

export default connect(mapStateToProps, {setUser})(UserProfile)
