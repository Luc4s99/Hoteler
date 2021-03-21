//React
import React from 'react';
import { Link } from 'react-router-dom';

// CSS
import './cadastroOperador.css';

// Componentes
import NavBar from '../../components/Navbar';
import Footer from '../../components/Footer';
import LoginForm from '../../components/LoginForm';
import DadosForm from '../../components/DadosForm';

function CadastroOperador() {
  return (
    <>
      <NavBar />
      <div className="cadastroOperadorContainer">
        <h1 className="cadastroOperadorTitulo"> Cadastro de Operador </h1>
        <div className="cadastroOperadorFormContainer">
          <div className="cadastroOperadorFormUsuario">
              <h2 className="cadastroOperadorSubTitulo"> Informações de Login </h2>
              <LoginForm />
          </div>
          <div className="cadastroOperadorFormDados">
              <h2 className="cadastroOperadorSubTitulo"> Informações Pessoais</h2>
              <DadosForm />
          </div>
        </div>
        <div className="cadastroOperadorBotoes">
          <Link to="/selecaoCadastro" className="btn btn-danger btn-lg">Cancelar</Link>
          <Link to="/" className="btn btn-success btn-lg">Cadastrar</Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CadastroOperador;