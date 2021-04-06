import React, { useEffect, useState } from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import useReservaAPI from '../../helpers/ReservasApi';

import './listarReserva.css';

function ListarReserva() {

    let listagemReserva = 0;
    const reservasAPI = useReservaAPI();
    const [reservas, setReservas] = useState([]);

    useEffect(()=>{

        const getDadosReservas = async () => {
        
            const getDadosReservas = async () => {
                
                const obj = await reservasAPI.fetchReserva();
                
                if(obj) {
                    
                    setReservas(obj);
                }
            }

            getDadosReservas();
        }

        getDadosReservas();

    },[])

    function deletarReserva(id) {

        try {
            
            reservasAPI.deleteReserva(id);
        }catch(ex) {

            console.log(ex);
        }
    }

  return (
    <>
    <Navbar/>
    <div className="listarReservaContainer">
        <h1 className="listarReservaTitulo">Listar Reserva</h1>
        <div>
            <h2 className="listarReservaSubtitulo">Listar Por:</h2>
            <div className="listarReservaForm row">
                <div className="mr-5">
                    <label htmlFor="id" className="form-label">ID</label>
                    <input type="text" className="form-control" id="id" placeholder="Digite o ID do quarto" />
                </div>
                <div className="mr-5">
                    <label htmlFor="nQuarto" className="form-label">Número do Quarto</label>
                    <input type="text" className="form-control" id="nQuarto" placeholder="Informe o Número do Quarto" />
                </div>
                <button type="button" className="btn btn-primary">Filtrar</button>
            </div>
        </div>
        <h2 className="listarReservaTitulo">Resultados</h2>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Quarto</th>
                    <th scope="col">Valor</th>
                    <th scope="col">Diárias</th>
                    <th scope="col">Hóspedes</th>
                    <th scope="col">Ação</th>
                </tr>
            </thead>
            <tbody>

                {
                    reservas.map((reserva, index) => {
                        return(
                            <tr key={index}>
                                <td>{listagemReserva = listagemReserva + 1}</td>
                                <td>{reserva.quarto.id}</td>
                                <td>{reserva.quarto.diaria}</td>
                                <td>{reserva.diarias}</td>
                                <td>{reserva.hospedes[index]}</td>
                                <td>
                                    <button type="button" className="btn btn-primary">Editar</button>
                                    <button onClick={() => deletarReserva(reserva.id)} type="button" className="btn btn-danger">Excluir</button>
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

export default ListarReserva;