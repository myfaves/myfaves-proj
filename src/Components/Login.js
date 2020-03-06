import React from 'react'
import useInput from "../hooks/useInput"

const Login = (props) => {
  const [{ email, password }, setValues] = useInput({
    email: "",
    password: ""
  })
  // const login = () => {}
  return (
    <div>
       <form
        onSubmit={e => {
          e.preventDefault()
          console.log(`Email: ${email} Password: ${password}`)
          // login()
        }}
      >
        <input
          name="email"
          value={email}
          placeholder="Email"
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