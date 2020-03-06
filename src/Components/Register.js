import React from 'react'
import Input from './Reusable/Input'
import '../Style/register.css'

const Register = (props) => {
  return (
    <div>
      <Input
        name="firsname"
        // value={firstname}
        placeHolder="First Name"
      // onChange={setValues}
      />
      <Input
        name="lastname"
        // value={lastname}
        placeHolder="Last Name"
      // onChange={setValues}
      />
      <Input
        name="age"
        // value={lastname}
        placeHolder="Age"
      // onChange={setValues}
      />
      <Input
        name="email"
        // value={lastname}
        placeHolder="Email"
      // onChange={setValues}
      />
      <Input
        name="password"
        // value={lastname}
        placeHolder="Password"
      // onChange={setValues}
      />
      <Input
        name="confirmPassword"
        // value={lastname}
        placeHolder="Confrim Password"
      // onChange={setValues}
      />
      <div className="register-button-container">
        <button type="submit">Create Account</button>
      </div>
    </div>
  )
}

export default Register