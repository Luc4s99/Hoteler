import React, {useEffect, useState} from 'react';
import { Link, Redirect } from 'react-router-dom';

import './login.css'

import Footer from '../../components/Footer';

import useOperadoresAPI from '../../helpers/OperadoresAPI';

function Login() {

    useEffect(() => {

        const verificarOperadores = async () => {
        
            const verificarOperadores = async () => {
                
                const obj = await operadoresAPI.hasOperadores();
                
                if(!obj) {
                    
                    setRedirectOperador(1);
                }
            }

            verificarOperadores();
        }

        verificarOperadores();
    },[])

    const operadoresAPI = useOperadoresAPI();
    const [redirectOperador, setRedirectOperador] = useState(0);
    const [redirectInicio, setRedirectInicio] = useState(0);
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');

    async function verificarLogin() {

        const resp = await operadoresAPI.verifyOperador(usuario, senha);
        
        if(resp === true) {
            
            setRedirectInicio(1);
        }
    }

    return (
    <>
        {redirectInicio === 1 ? <Redirect to="/telaInicial" /> : null}
        {redirectOperador === 1 ? <Redirect to="/cadastroOperador" /> : null}
        <div className="loginContainer">
            <div className="login">
                <div className="mb-3">
                    <label htmlFor="usuario" className="form-label">Usuário</label>
                    <input onChange={e => setUsuario(e.target.value)} type="text" className="form-control" id="usuario" placeholder="Informe o Usuário" />
                </div>
                <div className="mb-3">
                    <label htmlFor="senha" className="form-label">Senha</label>
                    <input onChange={e => setSenha(e.target.value)} type="password" className="form-control" id="senha" placeholder="Informe a senha" /> 
                </div>
                <div className="loginBotoes">
                    <Link to="/" className="btn btn-danger btn-lg mr-4">Voltar</Link>
                    <button onClick={verificarLogin} className="btn btn-success btn-lg">Entrar</button>
                </div>
            </div>
        </div>
        <Footer />
    </>
  );
}
export default Login;