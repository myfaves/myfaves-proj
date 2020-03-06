import React from "react"
import useInput from "../hooks/useInput"

const Register = props => {
  const [{ email, password }, setValues] = useInput({
    email: "",
    password: "",
    first_name: "",
    last_name: "",
    age: ""
  })
  // const register = () => {}
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          console.log(`Email: ${email} Password: ${password}`)
          // register()
        }}
      >
        <input
          name="email"
          value={email}
          placeholder="Email"
          onChange={setValues}
        />
        <input
          name="first_name"
          value={first_name}
          placeholder="First Name"
          onChange={setValues}
        />
        <input
          name="last_name"
          value={last_name}
          placeholder="Last Name"
          onChange={setValues}
        />
        <input
          type="number"
          name="age"
          value={age}
          placeholder="Age"
          onChange={setValues}
        />
        <input
          type="password"
          name="password"
          value={password}
          placeholder="Password"
          onChange={setValues}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default Register
