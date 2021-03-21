import React from 'react';

import './loginForm.css';

function LoginForm() {
  
  return (
    <>
      <div className="loginForm">
        <div className="mb-3">
          <label htmlFor="usuario" className="form-label">Usuário</label>
          <input type="text" className="form-control" id="usuario" placeholder="Informe o Usuário" />
        </div>
        <div className="mb-3">
          <label htmlFor="senha" className="form-label">Senha</label>
          <input type="text" className="form-control" id="senha" placeholder="Informe a senha" />
        </div>
        <div className="mb-3">
          <label htmlFor="confimaSenha" className="form-label">Confirme a senha</label>
          <input type="text" className="form-control" id="confimaSenha" placeholder="Confirme a senha" />
        </div>
      </div>
    </>
  );
}

export default LoginForm;