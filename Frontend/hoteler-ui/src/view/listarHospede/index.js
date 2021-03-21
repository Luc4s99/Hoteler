import React, { useEffect, useState } from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

import './listarHospede.css';

function ListarHospede() {

    const [hospedes, setHospedes] = useState([]); // Vetor de categorias
    const [totalPagesHospedes, setTotalPagesHospedes] = useState(1); // Total de paginas
    const [actualPageHospedes, setActualPageHospedes] = useState(1);

    useEffect(()=>{

        const getDadosHospedes = async () => {
        
        }

        getDadosHospedes();

    },[])

  return (
    <>
    <Navbar/>
    <div className="listarHospedeContainer">
        <h1 className="listarHospedeTitulo">Listar Hospede</h1>
        <div>
            <h2 className="listarHospedeSubtitulo">Listar Por:</h2>
            <div className="listarHospedeForm row">
                <div className="mr-1">
                    <label htmlFor="nomeHospede" className="form-label">Nome</label>
                    <input type="text" className="form-control" id="nomeHospede" placeholder="Digite o nome do hospede" />
                </div>
                <div className="mr-1">
                    <label htmlFor="numeroQuarto" className="form-label">Quarto</label>
                    <input type="text" className="form-control" id="numeroQuarto" placeholder="Informe o Número do Quarto" />
                </div>                
                <button type="button" className="btn btn-primary">Filtrar</button>
            </div>
        </div>
        <h2 className="listarHospedeTitulo">Resultados</h2>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">ID do Hospede</th>
                    <th scope="col">Nome do Hospede</th>
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

export default ListarHospede;