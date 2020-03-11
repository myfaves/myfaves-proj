import React, { useState } from "react"
import { connect } from "react-redux"
import Input from "./Reusable/Input"
import useCheckUser from "../hooks/useCheckUser"
import useInput from "../hooks/useInput"
import {toast} from 'react-toastify'
import axios from 'axios'
import {setUser} from '../redux/reducer'
import '../Style/profile.css'

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
    <div>
    <p>Profile</p>
    <div className="prof-pic">
    </div>
      {!editToggle ? (
        <div className="name-container">
          <h1>
            Name: {first_name} {last_name}
          </h1>
          <h1>Age: {age}</h1>
          <h1>Email: {email}</h1>
        </div>
      ) : (
        <form className="name-container" onSubmit={updateProfile}>
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
          <button className="profile-btn" type="submit">Save</button>
        </form>
      )}
      <button className="profile-btn"onClick={() => setEditToggle(!editToggle)}>
        {!editToggle ? "Edit" : "Cancel"}{" "}
      </button>
      <div className="profile-container">
        <div className="biography">
          <p>Bio:</p>
        </div>
        <div className="interests">
          <p>Interests:</p>
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
