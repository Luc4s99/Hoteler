// React
import React from 'react';
import { Link } from 'react-router-dom';

// CSS
import './selecaoLista.css';

// Componentes
import NavBar from '../../components/Navbar';
import Footer from '../../components/Footer';

// Imagens
import quarto from '../../assets/images/quarto.jpeg';
import hospede from '../../assets/images/hospede.jpeg';
import operador from '../../assets/images/operador.jpeg';
import reserva from '../../assets/images/reserva.jpeg';
import logo from '../../assets/images/logo-hoteler.png';

function SelecaoLista() {
  return (
      <>
        <NavBar />
        <div className="selecaoListaContainer">
            <div className="selecaoListaLogo">
                <img src={logo} alt="logo"></img>
            </div>
            <span className="selecaoListaLabel"> Opções de Listagem </span>
            <div className="selecaoListaOpcoes">
                <div className="selecaoListaImagem">
                    <img src={operador} alt="Operador"></img>
                    <img src={quarto} alt="Quarto"></img>
                    <img src={hospede} alt="Hospede"></img>
                    <img src={reserva} alt="Reserva"></img>
                </div>
                <div className="selecaoListaBotoes">
                <Link to="/listarOperador" className="btn btn-dark">Listar Operadores</Link>
                <Link to="/listarQuarto" className="btn btn-dark">Listar Quartos</Link>
                <Link to="/listarHospede" className="btn btn-dark">Listar Hospedes</Link>
                <Link to="/listarReserva" className="btn btn-dark">Listar Reservas</Link>
                </div>
            </div>
            <div className="selecaoListaVoltar">
                <Link to="/telaInicial" className="btn btn-dark">Voltar</Link>
            </div>
        </div>
        <Footer />
      </>
  );
}

export default SelecaoLista;