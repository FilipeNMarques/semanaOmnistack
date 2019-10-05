import React from 'react';

//API
import api from './services/api'
//ROUTES
import Routes from './routes'
//STYLES
import './App.css';
//IMAGES
import Logo from './assets/logo.svg'

function App() {


  return (
    <div className="container">
      <img src={Logo} alt="Logo ArCnC" />
      <div className="content">
        <Routes />

      </div>
    </div>
  );
}

export default App;
