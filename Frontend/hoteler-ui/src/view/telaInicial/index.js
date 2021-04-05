import React from 'react';
import { Link } from 'react-router-dom';

import './telaInicial.css'

import NavBar from '../../components/Navbar';
import Footer from '../../components/Footer';

function TelaInicial() {
  return (
      <div>
            <NavBar />
            <div className="telaInicialContainer">
              <div className="opcoesTelaInicial">
                <Link to="/selecaoCadastro" className="btn btn-success btn-lg">Seleção Cadastro</Link>
                <Link to="/selecaoLista" className="btn btn-success btn-lg">Seleção de Listagem</Link>
                <Link to="/realizarReserva" className="btn btn-success btn-lg">Realizar Reserva</Link>
              </div>
            </div>            
            <Footer />
      </div>    
  );
}

export default TelaInicial;