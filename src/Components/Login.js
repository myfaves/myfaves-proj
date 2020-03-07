import React from 'react';
import useInput from "../hooks/useInput"
import Input from './Reusable/Input'
import { connect } from 'react-redux'
import { setUser } from '../redux/reducer'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import '../Style/login.css'
const Login = (props) => {
  const [{ email, password }, setValues] = useInput({
    email: "",
    password: ""
  })
  const login = () => {
    axios.post("/auth/login", { email, password })
    .then(res => {
      props.setUser(res.data)
      props.history.push('/')
    }).catch(err => console.log(err))
  }
  return (
    <div className="login-page">
      <header id="login-logo">MYFaves</header>
      <div className="auth-body">
        <form
          onSubmit={e => {
            e.preventDefault()
            console.log(`Email: ${email} Password: ${password}`)
            login()
          }}
        >
          <h1>Welcome Back :)</h1>
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
          <div id="forgot">Forgot your password?</div>
          <div className="login-button-container">
            <button type="submit" onClick={login}>Login</button>
            <button onClick={() => props.history.push('/register')} type="submit">Register</button>
          </div>
        </form>
      </div>
    </div>
  )
}
export default withRouter(connect(null, { setUser })(Login));