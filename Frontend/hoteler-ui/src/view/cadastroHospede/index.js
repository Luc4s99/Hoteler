//React
import React from 'react';
import { Link } from 'react-router-dom';

// CSS
import './cadastroHospede.css';

// Componentes
import NavBar from '../../components/Navbar';
import Footer from '../../components/Footer';

function CadastroHospede() {
  return (
    <>
      <NavBar />
      <div className="cadastroHospedeContainer">
        <h1 className="cadastroHospedeTitulo"> Cadastro de Hospede </h1>
        <div className="cadastroHospedeFormContainer">
          
          <div className="dadosForm"> 
    
            <div className="input-group">
                <span className="input-group-text" id="inputGroup-sizing-default">Nome</span>
                <input type="text" className="form-control" aria-describedby="inputGroup-sizing-default" />
            </div>

            <div className="input-group">
                <span className="input-group-text" id="inputGroup-sizing-default">CPF</span>
                <input type="text" className="form-control" aria-describedby="inputGroup-sizing-default" />
            </div>

            <div className="input-group mb-3">
              <label htmlFor="sexo" className="input-group-text">Sexo</label> <br/>
              <select className="form-select" id="sexo" defaultValue={"Padrao"}>
                <option value="Padrao">  </option>
                <option value="Masculino"> Masculino </option>
                <option value="Feminino"> Feminino </option>
                <option value="Outro"> Outro </option>
              </select>
            </div> 

            <div>
              <div className="input-group">
                  <span className="input-group-text" id="inputGroup-sizing-default">E-mail</span>
                  <input type="email" className="form-control"  aria-describedby="inputGroup-sizing-default" />
              </div>
            </div>

            <div>
                <div className="input-group">
                    <span className="input-group-text" id="inputGroup-sizing-default">Telefone</span>
                    <input type="text" className="form-control" aria-describedby="inputGroup-sizing-default"/>
                </div>
            </div>

            <div>
                <div className="input-group">
                    <span className="input-group-text" id="inputGroup-sizing-default">Nascimento</span>
                    <input type="date" className="form-control" aria-describedby="inputGroup-sizing-default" />
                </div>
            </div>

            <div>
                <div className="input-group mb-3">
                    <label className="input-group-text" htmlFor="inputGroupSelect01">Estado</label>
                    <select className="form-select" defaultValue={'MG'} id="inputGroupSelect01">
                        <option value="AC">AC</option>
                        <option value="AL">AL</option>
                        <option value="AP">AP</option>
                        <option value="AM">AM</option>
                        <option value="BA">BA</option>
                        <option value="CE">CE</option>
                        <option value="DF">DF</option>
                        <option value="ES">ES</option>
                        <option value="GO">GO</option>
                        <option value="MA">MA</option>
                        <option value="MT">MT</option>
                        <option value="MS">MS</option>
                        <option value="MG">MG</option>
                        <option value="PA">PA</option>
                        <option value="PB">PB</option>
                        <option value="PR">PR</option>
                        <option value="PE">PE</option>
                        <option value="PI">PI</option>
                        <option value="RJ">RJ</option>
                        <option value="RN">RN</option>
                        <option value="RS">RS</option>
                        <option value="RO">RO</option>
                        <option value="RR">RR</option>
                        <option value="SC">SC</option>
                        <option value="SP">SP</option>
                        <option value="SE">SE</option>
                        <option value="TO">TO</option>
                    </select>
                </div>
            </div>

            <div>
                <div className="input-group">
                    <span className="input-group-text" id="inputGroup-sizing-default">Cidade</span>
                    <input type="text" className="form-control" aria-describedby="inputGroup-sizing-default" />
                </div>
            </div>

            <div>
                <div className="input-group">
                    <span className="input-group-text" id="inputGroup-sizing-default">Endereço</span>
                    <input type="text" className="form-control" aria-describedby="inputGroup-sizing-default" />
                </div>
            </div>            

          </div>

        </div>
        <div className="cadastroHospedeBotoes">
          <Link to="/selecaoCadastro" className="btn btn-danger btn-lg">Cancelar</Link>
          <Link to="/" className="btn btn-success btn-lg">Cadastrar</Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CadastroHospede; 