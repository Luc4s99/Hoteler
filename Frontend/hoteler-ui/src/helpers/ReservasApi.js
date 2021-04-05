import axios from "axios";

const endPoint = axios.create({
    baseURL: "http://localhost:8080"
})

const API = {

    //Buscar todos as reservas
    fetchReserva: async () => {
    try{
        const query = `reservas`
        const response = await endPoint.get(query);
        
        return response.data;
    } catch(error){
        return {
            dados: []
        }
    }
    },
    addReserva: async (reserva) => {
        try{
            const response = await endPoint.post("reservas/",
            {hospedes: reserva.hospedes, quarto: reserva.quarto, diarias: reserva.diarias});

            return{
                msg: "ok"
            }
        } catch(error){
            let msg = [];
            for (let m of error.response.data){
                msg.push(m.mensagemUsuario)
            }
            return {
                msgs: msg
            }
        }
    },
    updateReserva: async(id, reserva) => {
        try{
            const response = await endPoint.put(`reservas/${id}`,
            {hospedes: reserva.hospedes, quarto: reserva.quarto, diarias: reserva.diarias});
        } catch(error){
            let msg = [];
            for (let m of error.response.data){
                msg.push(m.mensagemUsuario)
            }
            return {
                msgs: msg
            }
        }
    },
    deleteReserva: async(id) => {
        try{
            const response = await endPoint.delete(`reservas/${id}`);
            
            return response;
        } catch(error){
            let msg = [];
            for (let m of error.response.data){
                msg.push(m.mensagemUsuario)
            }
            return {
                msgs: msg
            }
        }
    }
}

export default () => API