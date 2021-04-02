import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/images/logo-hoteler.png';
import './home.css';

function Home() {
  return(
    <>
      <div classname="homeContainer">
        
        <div>

          <img src={Logo} alt='Logo do site' />

        </div>

        <div className="conteudo">

          <h1>Bem vindo ao Hoteler!</h1>

          <h4>Uma aplicação fácil e intuitiva para gerenciamento do seu hotel!</h4>

          <Link to="/login" className="btn btn-success btn-lg">Login</Link>

        </div>

        {/*<h1> TODO </h1>
        <ul>
          <li> Linkar com o BD </li>
          <li> Definir o que sera o ID dos quartos -> Será um tipo Long mesmo </li>
          <li> Descutir como definir a capacidade/tipo de um Quarto -> Será definida assim que os quartos forem cadastrados</li>
          <li> Colocar um botao voltar nas telas de listagem?</li>
          <li> Definir um layout para esta pagina home ("/")</li>
          <li> Mudar a NavBar de acordo com se o usuario esta logado ou nao</li>
          <li> Mudar a NavBar de acordo com o nivel do usuario</li>
          <li> Melhorar CSS </li>
        </ul>*/}

      </div>

    </>
  );
}

export default Home;