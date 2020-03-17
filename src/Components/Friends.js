import React, {useState, useEffect} from "react"
import { connect } from "react-redux"
import axios from 'axios'
import {setFriends} from '../redux/reducer'

const Friends = ({ friends, setFriends }) => {
  useEffect(() => {
    axios
      .get("/api/friends/")
      .then(results => {
        setFriends(results.data)
      })
      .catch(err => console.log(err))
  }, [])
  const addFriend = user_id => {
    axios
      .post(`/api/friends/${user_id}`)
      .then(results => {
        setFriends(results.data)
      })
      .catch(err => console.log(err))
  }
  return (
    <div>
      <div>
        <h1>Friends</h1>
        {friends.length > 0 &&
          friends.map(friend => (
            <div>
              <h1>{friend.first_name}</h1>
            </div>
          ))}
      </div>
      <div>
        <h1>Other Users</h1>
      </div>
    </div>
  )
}

const mapStateToProps = store => {
  const { friends } = store
  return { friends }
}

export default connect(mapStateToProps, { setFriends })(Friends)
