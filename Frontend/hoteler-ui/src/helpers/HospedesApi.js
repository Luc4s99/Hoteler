import axios from "axios";

const endPoint = axios.create({
    baseURL: "http://localhost:8080"
})

const API = {

    // Nome, cpf, sexo, dataNascimento, email, telefone, estado, cidade, endereco

    //Buscar todos os hospedes
    fetchHospede: async () => {
    try{
        const query = `hospedes`
        const response = await endPoint.get(query);

        return response.data;
    } catch(error){
        return {
            dados: []
        }
    }
    },
    addHospede: async (hospede) => {
        try{
            const response = await endPoint.post("hospedes",
            {nome: hospede.nome, cpf:hospede.cpf, sexo:hospede.sexo, nascimento:hospede.nascimento, email:hospede.email,
            telefone: hospede.telefone, estado:hospede.estado, cidade:hospede.cidade, endereco:hospede.endereco});

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
    },
    updateHospede: async(id, hospede) => {
        try{
            const response = await endPoint.put(`hospedes/${id}`,
            {nome: hospede.nome, cpf:hospede.cpf, sexo:hospede.sexo, dataNascimento:hospede.dataNascimento, email:hospede.email,
            telefone: hospede.telefone, estado:hospede.estado, cidade:hospede.cidade, endereco:hospede.endereco});
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
    deleteHospede: async(id) => {
        try{
            const response = await endPoint.delete(`hospedes/${id}`);
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
    }
}

export default () => API