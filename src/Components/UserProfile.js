import React from 'react'
import {connect} from 'react-redux'
import useCheckUser from '../hooks/useCheckUser'

const UserProfile = ({user, history}) => {
  useCheckUser(user, history.push)
  const {first_name, last_name, age, email} = user
  return (
    <div>
      <h1>Name: {first_name} {last_name}</h1>
      <h1>Age: {age}</h1>
      <h1>Email: {email}</h1>
    </div>
  )
}

const mapStateToProps = (store) => {
  const {user} = store.reducer
  return {user}
}

export default connect(mapStateToProps)(UserProfile)