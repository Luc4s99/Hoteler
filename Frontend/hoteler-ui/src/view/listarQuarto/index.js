import React, { useEffect, useState } from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import useQuartoAPI from '../../helpers/QuartoApi';

import './listarQuarto.css';

function ListarQuarto() {

    let listagemQuarto = 0;
    const quartoAPI = useQuartoAPI();
    const [quartos, setQuartos] = useState([]); // Vetor de quartos

    useEffect(()=>{

        const getDadosQuartos = async () => {
            const obj = await quartoAPI.fetchQuarto();

            if(obj) {

                setQuartos(obj);
            }
        }

        getDadosQuartos();

    },[])

    function deletarQuarto(id) {

        try {
            
            quartoAPI.deleteQuarto(id);
        }catch(ex) {

            console.log(ex);
        }
    }

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
                    <th scope="col">Diária</th>
                    <th scope="col">Ocupado</th>
                    <th scope="col">Ação</th>
                </tr>
            </thead>
            <tbody>

                {
                    quartos.map((quarto, index) => {
                        return(

                            <tr key={index}>
                                <td>{listagemQuarto = listagemQuarto + 1}</td>
                                <td>{quarto.id}</td>
                                <td>{quarto.capacidade}</td>
                                <td>{quarto.tipo}</td>
                                <td>{quarto.diaria}</td>
                                <td>{quarto.ocupado ? 'Sim' : 'Não'}</td>
                                <td>
                                    <button type="button" className="btn btn-primary">Editar</button>
                                    <button onClick={() => deletarQuarto(quarto.id)} type="button" className="btn btn-danger">Excluir</button>
                                </td>
                            </tr>
                        );
                    })
                }

            </tbody>
        </table>
    </div>
    <Footer/>
    </>
  );
}

export default ListarQuarto;