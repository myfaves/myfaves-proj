import React from "react"
import useInput from "../hooks/useInput"
import Input from './Reusable/Input'
import { connect } from 'react-redux'
import { setUser } from '../redux/reducer'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import '../Style/register.css'

const Register = props => {
  const [{ email, password, first_name, last_name, age, confirmPassword }, setValues] = useInput({
    email: "",
    password: "",
    first_name: "",
    last_name: "",
    age: "",
    confirmPassword: ""
  })

  const register = () => {
    axios.post('/auth/register', { email, password, first_name, last_name, age })
      .then(res => {
        props.setUser(res.data)
        props.history.push('/')
      }).catch(err => console.log(err))
  }
  
  return (
    <div className="register-page">
      <header id="login-logo">MYFaves</header>
      <div className="register-body">
        <form
          onSubmit={e => {
            e.preventDefault()
            console.log(`Email: ${email} Password: ${password}`)
            register()
          }}
        >
          <h1>Sign Up</h1>
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
          <Input
            type="password"
            name="password"
            value={password}
            placeHolder="Password"
            handleChange={setValues}
          />
          <Input
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            placeHolder="Confirm Password"
            handleChange={setValues}
          />
        <div className="register-button-container">
          <button type="submit" onClick={register}>Create Account</button>
        </div>
        </form>
      </div>
    </div>
  )
}
export default withRouter(connect(null, { setUser })(Register));
