import React, {useState} from 'react';

import './cadastroQuarto.css'

import useQuartoAPI from '../../helpers/QuartoApi';

import NavBar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Link, Redirect } from 'react-router-dom';

function CadastroQuarto() {
    
    const quartoAPI = useQuartoAPI();
    const [capacidade, setCapacidade] = useState(0);
    const [tipoQuarto, setTipoQuarto] = useState('');
    const [diaria, setDiaria] = useState(0);
    const [ocupado, setOcupado] = useState(false);
    const [redirect, setRedirect] = useState(0);
    
    function cadastraQuarto() {

        let quarto = {
            tipo: tipoQuarto,
            capacidade: capacidade,
            diaria: diaria,
            ocupado: ocupado
        }

        const obj = quartoAPI.addQuarto(quarto);

        if(obj) {
            
            setRedirect(1);
        } else {
            console.log(obj);
        }
    }

    return (
      <>
        {redirect === 1 ? <Redirect to="/telaInicial" /> : null}
        <NavBar />
        <div className="cadastroQuartoContainer">
            <h1 className="cadastroQuartoTitulo">Cadastro de Quarto</h1>

            <div className="cadastroQuarto">
                <div className="form-group">
                    <label htmlFor="capacidadeQuarto">Capacidade do Quarto (Máximo de 10)</label>
                    <input onChange={e => setCapacidade(e.target.value)} type="number" className="form-control" max="10" min="1" />

                    <label htmlFor="tipoQuarto">Tipo do Quarto</label>
                    <select defaultValue="Selecione" onChange={e => setTipoQuarto(e.target.value)} className="form-control" name="tipo" id="tipoQuarto">
                        <option value="Selecione">Selecione</option>
                        <option value="Solteiro">Solteiro</option>
                        <option value="Duplo Solteiro">Duplo Solteiro</option>
                        <option value="Casal">Casal</option>
                        <option value="Dormitório">Dormitório</option>
                        <option value="Apartamento">Apartamento</option>
                        <option value="Master">Master</option>
                        <option value="Deluxe">Deluxe</option>
                    </select>

                    <label htmlFor="diariaQuarto">Diária do Quarto</label>
                    <div className="input-group mb-3">
                        <span className="input-group-text">$</span>
                        <input onChange={e => setDiaria(parseFloat(e.target.value))} id="diariaQuarto" type="text" className="form-control" />
                    </div>

                    <div className="form-check form-check-inline">
                        <input onClick={e => setOcupado(true)} className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                        <label className="form-check-label" htmlFor="inlineRadio1">Quarto Ocupado</label>
                    </div>

                    <div className="form-check form-check-inline">
                        <input onClick={e => setOcupado(false)} className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                        <label className="form-check-label" htmlFor="inlineRadio2">Quarto Livre</label>
                    </div>

                </div>

                <div className="cadastroQuartoBotoes">
                    <Link to="/selecaoCadastro" className="btn btn-danger btn-lg mr-4">Cancelar</Link>
                    <button onClick={cadastraQuarto} className="btn btn-success btn-lg">Cadastrar</button>
                </div>

            </div>
          
        </div>
        <Footer />
      </>
  );
}

export default CadastroQuarto;