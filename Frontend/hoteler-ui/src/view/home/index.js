import React from 'react';
import { Link } from 'react-router-dom';

import './home.css'

function Home() {
  return(
      <div classname="homeContainer">
        <div>
          <h1> TODO </h1>
          <ul>
            <li> Linkar com o BD </li>
            <li> Definir o que sera o ID dos quartos </li>
            <li> Descutir como definir a capacidade/tipo de um Quarto</li>
            <li> Colocar um botao voltar nas telas de listagem?</li>
            <li> Definir um layout para esta pagina home ("/")</li>
            <li> Mudar a NavBar de acordo com se o usuario esta logado ou nao</li>
            <li> Mudar a NavBar de acordo com o nivel do usuario</li>
            <li> Melhorar CSS </li>
          </ul>
        </div>
        <Link to="/login" className="btn btn-success btn-lg">Login</Link>
           
      </div>
  );
}

export default Home;