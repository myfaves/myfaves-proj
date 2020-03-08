import React, { useState } from "react"
import { connect } from "react-redux"
import Input from "./Reusable/Input"
import useCheckUser from "../hooks/useCheckUser"
import useInput from "../hooks/useInput"

const UserProfile = ({ user, history }) => {
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
    //submit functionality to come
  }
  return (
    <div>
      <button onClick={() => setEditToggle(!editToggle)}>
        {!editToggle ? "Edit" : "Cancel"}{" "}
      </button>
      {!editToggle ? (
        <div>
          <h1>
            Name: {first_name} {last_name}
          </h1>
          <h1>Age: {age}</h1>
          <h1>Email: {email}</h1>
        </div>
      ) : (
        <form onSubmit={updateProfile}>
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
          <button type="submit">Save</button>
        </form>
      )}
    </div>
  )
}

const mapStateToProps = store => {
  const { user } = store
  return { user }
}

export default connect(mapStateToProps)(UserProfile)
