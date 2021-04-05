//React
import React, {useState} from 'react';
import { Link, Redirect } from 'react-router-dom';

// CSS
import './cadastroHospede.css';

// Componentes
import NavBar from '../../components/Navbar';
import Footer from '../../components/Footer';

//Conexão com a API
import useHospedeAPI from '../../helpers/HospedesApi';

function CadastroHospede() {
  
  const hospedeAPI = useHospedeAPI();
  const [redirect, setRedirect] = useState(0);
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [sexo, setSexo] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [nascimento, setNascimento] = useState('');
  const [estado, setEstado] = useState('');
  const [cidade, setCidade] = useState('');
  const [ endereco, setEndereco] = useState('');


  function cadastraHospede() {

    /*console.log(nome);
    console.log(cpf);
    console.log(sexo);
    console.log(email);
    console.log(telefone);
    console.log(nascimento);
    console.log(estado);
    console.log(cidade);
    console.log(endereco);*/

    let hospede = {
      nome: nome,
      cpf: cpf,
      sexo: sexo,
      email: email,
      telefone: telefone,
      nascimento: nascimento,
      estado: estado,
      cidade: cidade,
      endereco: endereco
    }

    const obj = hospedeAPI.addHospede(hospede);

    if(obj) {
      setRedirect(1);
    }

  }
  
  return (
    <>
      {redirect == 1 ? <Redirect to="/telaInicial" /> : null}
      <NavBar />
      <div className="cadastroHospedeContainer">
        <h1 className="cadastroHospedeTitulo"> Cadastro de Hospede </h1>
        <div className="cadastroHospedeFormContainer">
          
          <div className="dadosForm"> 
    
            <div className="input-group">
                <span className="input-group-text" id="inputGroup-sizing-default">Nome</span>
                <input onChange={e => setNome(e.target.value)} type="text" className="form-control" aria-describedby="inputGroup-sizing-default" />
            </div>

            <div className="input-group">
                <span className="input-group-text" id="inputGroup-sizing-default">CPF</span>
                <input onChange={e => setCpf(e.target.value)} type="text" className="form-control" aria-describedby="inputGroup-sizing-default" />
            </div>

            <div className="input-group mb-3">
              <label htmlFor="sexo" className="input-group-text">Sexo</label> <br/>
              <select onChange={e => setSexo(e.target.value)} className="form-select" id="sexo" defaultValue={"Padrao"}>
                <option value="Padrao">Selecione</option>
                <option value="Masculino"> Masculino </option>
                <option value="Feminino"> Feminino </option>
                <option value="Outro"> Outro </option>
              </select>
            </div> 

            <div>
              <div className="input-group">
                  <span className="input-group-text" id="inputGroup-sizing-default">E-mail</span>
                  <input onChange={e => setEmail(e.target.value)} type="email" className="form-control"  aria-describedby="inputGroup-sizing-default" />
              </div>
            </div>

            <div>
                <div className="input-group">
                    <span className="input-group-text" id="inputGroup-sizing-default">Telefone</span>
                    <input onChange={e => setTelefone(e.target.value)} type="text" className="form-control" aria-describedby="inputGroup-sizing-default"/>
                </div>
            </div>

            <div>
                <div className="input-group">
                    <span className="input-group-text" id="inputGroup-sizing-default">Nascimento</span>
                    <input onChange={e => setNascimento(e.target.value)} type="date" className="form-control" aria-describedby="inputGroup-sizing-default" />
                </div>
            </div>

            <div>
                <div className="input-group mb-3">
                    <label className="input-group-text" htmlFor="inputGroupSelect01">Estado</label>
                    <select onChange={e => setEstado(e.target.value)} className="form-select" defaultValue={'Selecione'} id="inputGroupSelect01">
                        <option value="Selecione">Selecione</option>
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
                    <input onChange={e => setCidade(e.target.value)} type="text" className="form-control" aria-describedby="inputGroup-sizing-default" />
                </div>
            </div>

            <div>
                <div className="input-group">
                    <span className="input-group-text" id="inputGroup-sizing-default">Endereço</span>
                    <input onChange={e => setEndereco(e.target.value)} type="text" className="form-control" aria-describedby="inputGroup-sizing-default" />
                </div>
            </div>            

          </div>

          <div className="cadastroHospedeBotoes">

            <Link to="/selecaoCadastro" className="btn btn-danger btn-lg">Cancelar</Link>

            <button onClick={cadastraHospede} className="btn btn-success btn-lg">Cadastrar</button>

          </div>

        </div>
      </div>
      <Footer />
    </>
  );
}

export default CadastroHospede; 