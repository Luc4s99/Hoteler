import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useQuartoAPI from '../../helpers/QuartoApi';
import useHospedeAPI from '../../helpers/HospedesApi';
import { toast } from 'react-toastify';
import './realizarReserva.css'

import NavBar from '../../components/Navbar';
import Footer from '../../components/Footer';

function RealizarReserva() {

    const apiQuarto = useQuartoAPI();

    const inicialFromState = {codigo: null};

    const [quartos, setQuartos] = useState([]);
    const [currentQuarto, setCurrentQuarto] = useState(inicialFromState);   
    const [refreshQuartos, setRefreshQuartos] = useState(false); 
    const [totalPagesQuartos, setTotalPagesQuartos] = useState(1); 
    const [actualPageQuartos, setActualPageQuartos] = useState(1); 
    
    const apiHospede = useHospedeAPI();

    const [hospedes, setHospedes] = useState([]);
    const [currentHospede, setCurrentHospede] = useState(inicialFromState);   
    const [refreshHospedes, setRefreshHospedes] = useState(false); 
    const [totalPagesHospedes, setTotalPagesHospedes] = useState(1);
    const [actualPageHospedes, setActualPageHospedes] = useState(1);
    const [nomeHospedeSearch, setNomeHospedeSearch] = useState("");

    useEffect(()=>{

        const getDadosQuartos = async () => {
            const obj = await apiQuarto.fetchQuarto(actualPageQuartos-1, 5);
            if(obj){
                //console.log(obj)
                setQuartos(obj.dados)
                setTotalPagesQuartos(obj.paginas)
            }            
        }

        getDadosQuartos();

    },[refreshQuartos])

    const fetchHospede = async (actualPage, size) => {
        const obj = await apiHospede.fetchHospede(actualPage, size);
        if(obj){
            //console.log(obj)
            setHospedes(obj.dados)
            setTotalPagesHospedes(obj.paginas)
            //console.log(JSON.stringify(categorias))
        }            
    }

    function fetch(){
        fetchHospede(0,5,nomeHospedeSearch);
    }
 

    return (
      <>
        <NavBar />
        <div className="realizarReservaContainer">
            <h1 className="realizarReservaTitulo"> Realizar Reserva </h1>
            <div className="realizarReservaDados row">
                <div className="realizarReservaQuarto">
                    <h3>Quarto</h3>
                    <div className="form-group">
                        <label htmlFor="quarto">Escolha um quarto</label>
                        <select className="form-control" name="quarto" id="quarto">
                        
                        {/* No futuro, fazer exibir apenas quartos vagos */}
                        {
                            quartos.length > 0 ? (
                                quartos.map(quarto => (
                                    <option> {quarto.id} </option>
                                ))
                            )
                            :
                            (
                                <option>
                                    Não existem dados cadastrados
                                </option>
                            )
                        }

                        </select>
                    </div>
                    
                    
                </div> 
                <div className="realizarReservaHospede">
                    <h3>Hospede</h3>
                    <table id="tabelaHospedes" className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Nome</th>
                                <th scope="col">Ação</th>
                            </tr>
                        </thead>
                        <tbody>

                        </tbody>
                    </table>
                    <button type="button" id="adicionaHospede" className="btn btn-secondary" /*onClick="modalInsereHospede"*/ data-toggle="modal" data-target="#exampleModal">
                        <i className="fas fa-plus"></i>
                    </button>
                    
                </div>
            </div>
            <div className="fimRealizarReserva row">
                <div className="realizarReservaValor">
                    <label className="mr-2">Número de diárias</label>
                    <input className="mr-5"/>
                    <label className="mr-2">Valor Total da Reserva</label>                    
                    <input />
                </div>
                <div className="realizarReservaBotoes">
                    <Link to="/telaInicial" className="btn btn-danger btn-lg mr-4">Cancelar</Link>
                    <Link to="/" className="btn btn-success btn-lg">Reservar</Link>
                </div>
            </div>
        </div>
        <Footer />


        {/* <!-- Modal --> */}        
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Escolha o Hospede</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        {/* Filtro */}
                        <div className="searchContainer">
                            <div className="inputSearchContainer">
                                Buscar por nome:
                                <input  type="text"
                                        value={nomeHospedeSearch}
                                        onChange={(e) =>{ setNomeHospedeSearch(e.target.value) }}></input>
                            </div>
                            <button onClick={fetch}>Filtrar</button>
                        </div>                      
                        
                        {/* Lista de Hospedes */}
                        <table>
                            <thead>
                                    <tr>
                                        <th> Nome </th>
                                        <th> Ações </th>
                                    </tr>
                            </thead>
                            <tbody>
                                    {
                                        hospedes.length > 0 ? (
                                            hospedes.map(hospede => (
                                                <tr key={hospede.id}>
                                                    <td>{hospede.nome}</td>
                                                    <td>
                                                        <button 
                                                                onClick={() => {
                                                                    ("#tabelaHospedes tbody").append(
                                                                        "<tr>" + "<td>" + hospede.id + "</td>"
                                                                        + "<td>" + hospede.nome + "</td>" + "</tr>"
                                                                    );
                                                                }}>Inserir</button>
                                                        
                                                    </td>
                                                </tr>
                                            ))
                                        )
                                        :
                                        (
                                            <tr>
                                                <td colSpan={2}>Não existem dados cadastrados</td>
                                            </tr>
                                        )
                                    }
                            </tbody>
                        </table>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger" data-dismiss="modal">Fechar</button>
                    </div>
                </div>
            </div>
        </div>
      </>
  );
}

export default RealizarReserva;


