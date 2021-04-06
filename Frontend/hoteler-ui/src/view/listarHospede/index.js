import React, { useEffect, useState } from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import useHospedeAPI from '../../helpers/HospedesApi';

import './listarHospede.css';

function ListarHospede() {

    let listagemHospede = 0;
    const hospedeAPI = useHospedeAPI();
    const [hospedes, setHospedes] = useState([]); // Vetor de categorias

    useEffect(()=>{

        const getDadosHospedes = async () => {
        
            const obj = await hospedeAPI.fetchHospede();
            
            if(obj) {
                 
                setHospedes(obj);
            }
        }

        getDadosHospedes();

    },[])

    function deletarHospede(id) {
        
        try {
            
            hospedeAPI.deleteHospede(id);
            window.location.reload();
        }catch(ex) {

            console.log(ex);
        }
    }

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

                {
                    hospedes.map((hospede, index) => {
                        return(
                            <tr key={index}>
                                <td>{listagemHospede = listagemHospede + 1}</td>
                                <td>{hospede.id}</td>
                                <td>{hospede.nome}</td>
                                <td>
                                    <button type="button" className="btn btn-primary">Editar</button>
                                    <button onClick={() => deletarHospede(hospede.id)} type="button" className="btn btn-danger">Excluir</button>
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

export default ListarHospede;