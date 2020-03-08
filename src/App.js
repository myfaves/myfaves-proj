import React from 'react';
import './App.css';
import NavBar from './Components/NavBar'
import routes from './routes'
import {connect} from 'react-redux'

const App = ({user}) => {
  return (
    <div className="App">
      {user && user.user_id && <NavBar />}
     {routes}
    </div>
  );
}

const mapStateToProps = (state) => {
  const {user} = state
  return {user}
}

export default connect(mapStateToProps)(App)
