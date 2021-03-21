import React from 'react';

import './login.css'

// import NavBar from '../../components/Navbar'; SE FOR USAR A NAVBAR, ADICIONAR + 60px NO CSS
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <>
        {/* <NavBar /> */}
        <div className="loginContainer">
            <div className="login">
                <div className="mb-3">
                    <label htmlFor="usuario" className="form-label">Usuário</label>
                    <input type="text" className="form-control" id="usuario" placeholder="Informe o Usuário" />
                </div>
                <div className="mb-3">
                    <label htmlFor="senha" className="form-label">Senha</label>
                    <input type="text" className="form-control" id="senha" placeholder="Informe a senha" />
                </div>
                <div className="loginBotoes">
                    <Link to="/" className="btn btn-danger btn-lg mr-4">Voltar</Link>
                    <Link to="/telaInicial" className="btn btn-success btn-lg">Entrar</Link>
                </div>
            </div>
        </div>
        <Footer />
    </>
  );
}
export default Login;