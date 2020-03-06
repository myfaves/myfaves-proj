import React from 'react'
import useInput from "../hooks/useInput"

const Login = (props) => {
  const [{ username, password }, setValues] = useInput({
    username: "",
    password: ""
  })
  // const login = () => {}
  return (
    <div>
       <form
        onSubmit={e => {
          e.preventDefault()
          console.log(`Username: ${username} Password: ${password}`)
          // login()
        }}
      >
        <input
          name="username"
          value={username}
          placeholder="Username"
          onChange={setValues}
        />
        <input
          type="password"
          name="password"
          value={password}
          placeholder="Password"
          onChange={setValues}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login