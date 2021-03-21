import axios from "axios";

const endPoint = axios.create({
    baseURL: "http://localhost:8080"
})

const API = {

        // id, tipo, preco, capacidade, ocupado

       fetchQuarto: async (page,size) => {
        try{
            const query = `hospedes?page=${page}&size=${size}`
            const response = await endPoint.get(query);
        } catch(error){
            return {
                dados: [],
                paginas: 0
            }
        }
       },
       addQuarto: async (quarto) => {
           try{
               const response = await endPoint.post("quartos/",
               {tipo:quarto.tipo, preco:quarto.preco, capacidade:quarto.capacidade, ocupado:quarto.ocupado});

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
       updateQuarto: async(id, quarto) => {
           try{
               const response = await endPoint.put(`quartos/${id}`,
               {tipo:quarto.tipo, preco:quarto.preco, capacidade:quarto.capacidade, ocupado:quarto.ocupado});
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
       deleteQuarto: async(id) => {
           try{
               const response = await endPoint.delete(`quartos/${id}`);
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