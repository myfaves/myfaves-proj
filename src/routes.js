import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Dashboard from './Components/Dashboard'
import Login from './Components/Login'
import Register from './Components/Register'
import Picker from './Components/Picker'
import UserProfile from './Components/UserProfile'

export default (
  <Switch>
    <Route exact path = '/' component={Dashboard} />
    <Route exact path = '/login' component={Login} />
    <Route exact path = '/register' component={Register} />
    <Route exact path = '/picker' component={Picker} />
    <Route exact path = '/userprofile' component={UserProfile} />
  </Switch>
)