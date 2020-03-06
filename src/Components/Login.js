import React from 'react'
import useInput from "../hooks/useInput"
import Input from './Reusable/Input'
import { withRouter } from 'react-router-dom'
import '../Style/login.css'

const Login = (props) => {
  const [{ username, password }, setValues] = useInput({
    username: "",
    password: ""
  })
  // const login = () => {}
  return (
    <div className="login-page">
      <header id="login-logo">MYFaves</header>
      <div className="auth-body">
        <form
          onSubmit={e => {
            e.preventDefault()
            console.log(`Username: ${username} Password: ${password}`)
            // login()
          }}
        >
          <h1>Sign In</h1>
          <Input
            name="username"
            value={username}
            placeHolder="Username"
            onChange={setValues}
          />
          <Input
            type="password"
            name="password"
            value={password}
            placeHolder="Password"
            onChange={setValues}
          />
          <a>Forgot your password?</a>
          <div className="login-button-container">
            <button type="submit">Login</button>
            <button onClick={() => props.history.push('/register')} type="submit">Register</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default withRouter(Login)