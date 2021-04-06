// React
import React from 'react';
import { Link } from 'react-router-dom';

// CSS
import './selecaoCadastro.css';

// Componentes
import NavBar from '../../components/Navbar';
import Footer from '../../components/Footer';

// Imagens
import quarto from '../../assets/images/quarto.jpeg';
import hospede from '../../assets/images/hospede.jpeg';
import operador from '../../assets/images/operador.jpeg';
import logo from '../../assets/images/logo-hoteler.png';

function SelecaoCadastro() {
  return (
      <>
        <NavBar />
        <div className="selecaoCadastroContainer">
            <div className="selecaoCadastroLogo">
                <img src={logo} alt="logo"></img>
            </div>
            <span className="selecaoCadastroLabel"> Opções de Cadastro </span>
            <div className="selecaoCadastroOpcoes">
                <div className="selecaoCadastroImagem">
                    <img src={operador} alt="Operador"></img>
                    <img src={quarto} alt="Quarto"></img>
                    <img src={hospede} alt="Hospede"></img>
                </div>
                <div className="selecaoCadastroBotoes">
                <Link to="/cadastroOperador" className="btn btn-dark">Cadastrar novo Operador</Link> {/* fazer */}
                <Link to="/cadastroQuarto" className="btn btn-dark">Cadastrar novo Quarto</Link>
                <Link to="/cadastroHospede" className="btn btn-dark">Cadastrar novo Hospede</Link> {/* fazer */}
                </div>
            </div>
            <div className="selecaoCadastroVoltar">
                <Link to="/telaInicial" className="btn btn-dark">Voltar</Link>
            </div>
        </div>
        <Footer />
      </>
  );
}

export default SelecaoCadastro;