import React, { useEffect, useState } from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import useOperadorAPI from '../../helpers/OperadoresAPI';

import './listarOperador.css';

function ListarOperador() {

    let listagemOperador = 0;
    const operadoresAPI = useOperadorAPI();
    const [operador, setOperadores] = useState([]); // Vetor de categorias

    useEffect(()=>{

        const getDadosOperadores = async () => {
            const obj = await operadoresAPI.fetchOperador();

            if(obj) {

                setOperadores(obj);
            }
        }

        getDadosOperadores();

    },[])

    function excluirOperador(id) {

        try{

            operadoresAPI.deleteOperador(id);
            window.location.reload();
        }catch(error) {

            console.log(error);
        }
    }

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
                    <th scope="col">Nome de Usuário</th>
                    <th scope="col">Ação</th>
                </tr>
            </thead>
            <tbody>

                {
                    operador.map((operador, index) => {
                        return(
                            <tr key={index}>
                                <td>{listagemOperador = listagemOperador + 1}</td>
                                <td>{operador.id}</td>
                                <td>{operador.nome}</td>
                                <td>{operador.usuario}</td>
                                <td>
                                    <button type="button" className="btn btn-primary">Editar</button>
                                    <button onClick={() => excluirOperador(operador.id)} type="button" className="btn btn-danger">Excluir</button>
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

export default ListarOperador;