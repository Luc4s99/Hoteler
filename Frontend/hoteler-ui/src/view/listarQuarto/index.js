import React, { useEffect, useState } from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

import './listarQuarto.css';

function ListarQuarto() {

    const [quartos, setQuartos] = useState([]); // Vetor de categorias
    const [totalPagesQuartos, setTotalPagesQuartos] = useState(1); // Total de paginas
    const [actualPageQuartos, setActualPageQuartos] = useState(1);

    useEffect(()=>{

        const getDadosQuartos = async () => {
        
        }

        getDadosQuartos();

    },[])

  return (
    <>
    <Navbar/>
    <div className="listarQuartoContainer">
        <h1 className="listarQuartoTitulo">Listar Quarto</h1>
        <div>
            <h2 className="listarQuartoSubtitulo">Listar Por:</h2>
            <div className="listarQuartoForm row">
                <div className="mr-1">
                    <label htmlFor="idQuarto" className="form-label">ID</label>
                    <input type="text" className="form-control" id="idQuarto" placeholder="Digite o ID do quarto" />
                </div>
                <div className="mr-1">
                    <label htmlFor="tipoQuarto" className="form-label">Tipo</label>
                    <input type="text" className="form-control" id="tipoQuarto" placeholder="Informe o Tipo do Quarto" />
                </div>
                <div className="mr-1">
                    <label className="form-label">Preço</label>
                    <input type="text" className="form-control" id="precoInicial"/>
                    <input type="text" className="form-control" id="precoFinal"/>
                </div>
                <div className="mr-1">
                    <label htmlFor="capacidadeQuarto" className="form-label">Capacidade</label>
                    <input type="text" className="form-control" id="capacidadeQuarto" placeholder="Informe a capacidade do Quarto" />
                </div>
                <div className="mr-1">
                    <label htmlFor="statusQuarto" className="form-label">Ocupado</label>
                    <input type="checkbox" className="form-control" id="statusQuarto"  />
                </div>
                <button type="button" className="btn btn-primary">Filtrar</button>
            </div>
        </div>
        <h2 className="listarQuartoTitulo">Resultados</h2>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">ID do Quarto</th>
                    <th scope="col">Capacidade</th>
                    <th scope="col">Tipo</th>
                    <th scope="col">Diárias</th>
                    <th scope="col">Hospedes</th>
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

export default ListarQuarto;