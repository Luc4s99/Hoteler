import React, { useEffect, useState } from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

import './listarOperador.css';

function ListarOperador() {

    const [operador, setOperadors] = useState([]); // Vetor de categorias
    const [totalPagesOperadors, setTotalPagesOperadors] = useState(1); // Total de paginas
    const [actualPageOperadors, setActualPageOperadors] = useState(1);

    useEffect(()=>{

        const getDadosOperadors = async () => {
        
        }

        getDadosOperadors();

    },[])

  return (
    <>
    <Navbar/>
    <div className="listarOperadorContainer">
        <h1 className="listarOperadorTitulo">Listar Operador</h1>
        <div>
            <h2 className="listarOperadorSubtitulo">Listar Por:</h2>
            <div className="listarOperadorForm row">
                <div className="mr-1">
                    <label htmlFor="nomeOperador" className="form-label">Nome</label>
                    <input type="text" className="form-control" id="nomeOperador" placeholder="Digite o nome do operador" />
                </div>
                <div className="mr-1">
                    <label htmlFor="tipoOperador" className="form-label">Tipo de Operador</label>
                    <input type="text" className="form-control" id="tipoOperador" placeholder="Informe o Tipo de Operador" />
                </div>                
                <button type="button" className="btn btn-primary">Filtrar</button>
            </div>
        </div>
        <h2 className="listarOperadorTitulo">Resultados</h2>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">ID do Operador</th>
                    <th scope="col">Nome do Operador</th>
                    <th scope="col">Ação</th>
                </tr>
            </thead>
            <tbody>

            </tbody>
        </table>
    </div>
    <Footer/>
    </>
  );
}

export default ListarOperador;