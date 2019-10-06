import React from 'react';

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
