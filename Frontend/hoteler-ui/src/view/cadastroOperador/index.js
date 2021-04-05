//React
import React, {useState} from 'react';
import { Link } from 'react-router-dom';

// CSS
import './cadastroOperador.css';

// Componentes
import NavBar from '../../components/Navbar';
import Footer from '../../components/Footer';
import LoginForm from '../../components/LoginForm';
import DadosForm from '../../components/DadosForm';

//Conexao com a API
import useOperadorAPI from '../../helpers/OperadoresAPI';

function CadastroOperador() {

  const operadorAPI = useOperadorAPI();
  const [redirect, setRedirect] = useState(0);
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [sexo, setSexo] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [nascimento, setNascimento] = useState('');
  const [estado, setEstado] = useState('');
  const [cidade, setCidade] = useState('');
  const [endereco, setEndereco] = useState('');
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [tipoUsuario, setTipoUsuario] = useState('');

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