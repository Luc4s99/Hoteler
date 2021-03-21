import React from 'react';

import './cadastroQuarto.css'

import NavBar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';

function CadastroQuarto() {
  return (
      <>
        <NavBar />
        <div className="cadastroQuartoContainer">
            <h1 className="cadastroQuartoTitulo">Cadastro de Quarto</h1>

            <p> O ID do quarto seria seu número? <br />
                É necessário cadastrar a capacidade? <br />
                Pois através do tipo do Quarto daria pra resgatar a quantidade, e vice versa
                Digo, um quarto de solteiro teria capacidade para uma pessoa certo?
            </p>

            <div className="cadastroQuarto">
                <div className="form-group">
                    <label htmlFor="capacidadeQuarto">Capacidade do Quarto</label>
                    <select className="form-control" name="capacidade" id="capacidadeQuarto">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>8</option>
                    </select>
                    <label htmlFor="tipoQuarto">Tipo do Quarto</label>
                    <select className="form-control" name="tipo" id="tipoQuarto">
                        <option>Solteiro</option>
                        <option>Duplo Solteiro</option>
                        <option>Casal</option>
                        <option>4</option>
                        <option>8</option>
                    </select>                    
                </div>
                <div className="cadastroQuartoBotoes">
                    <Link to="/selecaoCadastro" className="btn btn-danger btn-lg mr-4">Cancelar</Link>
                    <button className="btn btn-success btn-lg">Cadastrar</button>
                </div>
            </div>
          
        </div>
        <Footer />
      </>
  );
}

export default CadastroQuarto;