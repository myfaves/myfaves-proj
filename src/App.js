import React from 'react';
import './App.css';
import NavBar from './Components/NavBar'

const App = (props) => {
  return (
    <div className="App">
      <NavBar />
     {routes}
    </div>
  );
}

export default App;
