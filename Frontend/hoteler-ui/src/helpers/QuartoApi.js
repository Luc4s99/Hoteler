import axios from "axios";

const endPoint = axios.create({
    baseURL: "http://localhost:8080"
})

const API = {

        // id, tipo, preco, capacidade, ocupado

       fetchQuarto: async () => {
        try{
            const query = `quartos`
            const response = await endPoint.get(query);
            
            return response.data;
        } catch(error){
            return {
                dados: []
            }
        }
       },
       addQuarto: async (quarto) => {
           try{
               const response = await endPoint.post("quartos",
               {tipo:quarto.tipo, diaria:quarto.diaria, capacidade:quarto.capacidade, ocupado:quarto.ocupado});

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