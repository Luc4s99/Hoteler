import React, { useEffect, useState } from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

import './listarReserva.css';

function ListarReserva() {

    const [reservas, setReservas] = useState([]); // Vetor de categorias
    const [totalPagesReservas, setTotalPagesReservas] = useState(1); // Total de paginas
    const [actualPageReservas, setActualPageReservas] = useState(1);

    useEffect(()=>{

        const getDadosReservas = async () => {
        /* 
        Da onde puxar as reservas?
        Puxar da API dos quartos verificando se esta ocupado?
        Puxar de uma tabela reservas?
        Puxar da relação entre quartos e hospedes?
        */
        }

        getDadosReservas();

    },[])

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

            </tbody>
        </table>
    </div>
    <Footer/>
    </>
  );
}

export default ListarReserva;