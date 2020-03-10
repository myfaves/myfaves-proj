import React from 'react'
import Movies from './DataTypes/Movies'
import Games from './DataTypes/Games'

const Dashboard = (props) => {
  return (
    <div>
      <Movies />
      <Games />
    </div>
  )
}

export default Dashboard;