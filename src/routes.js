import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Dashboard from './Components/DashboardFunctional'
import Login from './Components/Login'
import Register from './Components/Register'
import Picker from './Components/Picker'
import MyFavorites from './Components/MyFavorites'
import UserProfile from './Components/UserProfile'
import Friends from './Components/Friends'

export default (
  <Switch>
    <Route exact path = '/' component={Dashboard} />
    <Route exact path = '/login' component={Login} />
    <Route exact path = '/register' component={Register} />
    <Route exact path = '/picker' component={Picker} />
    <Route exact path = '/favorites' component={MyFavorites} />
    <Route exact path = '/userprofile' component={UserProfile} />
    <Route exact path = '/friends' component={Friends} />
  </Switch>
)