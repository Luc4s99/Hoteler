import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/images/logo-hoteler.png';
import './home.css';

function Home() {
  return(
    <>
      <div className="homeContainer">
        
        <div className="homeDiv">

          <img src={Logo} alt='Logo do site' />

        </div>

        <div className="homeConteudo">

          <h1>Bem vindo ao Hoteler!</h1>

          <h4 className="homeH4">Uma aplicação fácil e intuitiva para gerenciamento do seu hotel!</h4>

          <Link to="/login" className="btn btn-success btn-lg">Login</Link>

        </div>

      </div>

    </>
  );
}

export default Home;