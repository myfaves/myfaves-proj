import React from "react"
import useInput from "../hooks/useInput"
import React from 'react'
import Input from './Reusable/Input'
import '../Style/register.css'

const Register = props => {
  const [{ email, password, first_name, last_name, age, confirmPassword}, setValues] = useInput({
    email: "",
    password: "",
    first_name: "",
    last_name: "",
    age: "",
    confirmPassword:""
  })
  // const register = () => {}
  return (
    <div>
      <Input
        name="first_name"
        value={first_name}
        placeHolder="First Name"
        onChange={setValues}
      />
      <Input
        name="last_name"
        value={last_name}
        placeHolder="Last Name"
        onChange={setValues}
      />
      <Input
        name="age"
        value={age}
        placeHolder="Age"
        onChange={setValues}
      />
      <Input
        name="email"
        value={email}
        placeHolder="Email"
        onChange={setValues}
      />
      <Input
        name="password"
        // value={password}
        placeHolder="Password"
        onChange={setValues}
      />
      <Input
        name="confirmPassword"
        value={confirmPassword}
        placeHolder="Confirm Password"
        onChange={setValues}
      />
      <div className="register-button-container">
        <button type="submit">Create Account</button>
      </div>
    </div>
  )
}

export default Register
