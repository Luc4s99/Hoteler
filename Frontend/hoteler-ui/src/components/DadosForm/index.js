import React from 'react';

import './dadosForm.css';

function DadosForm() {
  return (
    <>
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
      
        <div>
          <div className="input-group mb-3">
            <label htmlFor="tipoOperador" className="input-group-text">Tipo de Operador</label> <br/>
            <select className="form-select" id="tipoOperador" defaultValue={"1"}>
              <option value="1"> 1 </option>
              <option value="2"> 2 </option>
              <option value="3"> 3 </option>
            </select>
          </div> 
        </div>

      </div>
    </>
  );
}

export default DadosForm;

/* 
<form className="row dadosForm">
        <div className="col-md-12">
          <label htmlFor="nome" className="form-label">Nome Completo</label>
          <input type="text" className="form-control" id="nome" placeholder="Digite seu nome completo" />
        </div>
        <div className="col-md-2">
          <label htmlFor="cpf" className="form-label">CPF</label>
          <input type="text" className="form-control" id="cpf" placeholder="xxx.xxx.xxx-xx"/>
        </div>
        <div className="col-md-3">
          <label htmlFor="date" className="form-label">Data de Nascimento</label>
          <input type="date" className="form-control" id="date"/>
        </div>
        <div className="col-md-3">
          <label htmlFor="sexo" className="form-label">Sexo</label> <br/>
          <select className="form-select" id="sexo" defaultValue={"Padrao"}>
            <option value="Padrao">  </option>
            <option value="Masculino"> Masculino </option>
            <option value="Feminino"> Feminino </option>
            <option value="Outro"> Outro </option>
          </select>
        </div> 
        <div className="col-md-6">
          <label htmlFor="date" className="form-label">Cidade</label>
          <input type="date" className="form-control" id="date"/>
        </div> 
        <div className="col-md-3">
          <label htmlFor="estado" className="form-label">Estado</label>
        </div> 
          
      
*/