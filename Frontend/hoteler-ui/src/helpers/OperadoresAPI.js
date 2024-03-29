import axios from "axios";

const endPoint = axios.create({
    baseURL: "http://localhost:8080"
})

const API = {

    //Verifica as credenciais do operador
    verifyOperador: async (usuario, senha) => {

        try{

            const query = `operadores`;
            const response = await endPoint.get(query);
            let user = null;

            response.data.map((res) => {
                
                if((res.usuario.localeCompare(usuario)) === 0 && (res.senha.localeCompare(senha)) === 0) {
                    
                    user = res;
                }
            })

            return user ? true: false;
        }catch(error) {

            console.log(error)
        }
    },
    //Verifica se existem operadores cadastrados
    hasOperadores: async () => {
        try{
            const query = `operadores`;
            const response = await endPoint.get(query);

            return(response.data.length === 0 ? false : true);
        }catch(error) {

            console.log(error);
        }
    },
    //Buscar todos os operadores
    fetchOperador: async () => {
        try{
            const query = `operadores`
            const response = await endPoint.get(query);

            return response.data;
        } catch(error){
            return {
                dados: []
            }
        }
    },
    addOperador: async (operador) => {
        try{
            const response = await endPoint.post("operadores/",
            {nome: operador.nome, cpf:operador.cpf, sexo:operador.sexo, nascimento:operador.nascimento, email:operador.email,
            telefone: operador.telefone, estado:operador.estado, cidade:operador.cidade, endereco:operador.endereco, usuario:operador.usuario,
            senha:operador.senha, tipo:operador.tipo});

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
    updateOperador: async(id, operador) => {
        try{
            const response = await endPoint.put(`operadores/${id}`,
            {nome: operador.nome, cpf:operador.cpf, sexo:operador.sexo, dataNascimento:operador.dataNascimento, email:operador.email,
            telefone: operador.telefone, estado:operador.estado, cidade:operador.cidade, endereco:operador.endereco, usuario:operador.usuario,
            senha:operador.senha, tipo:operador.tipo});

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
    deleteOperador: async(id) => {
        try{
            const response = await endPoint.delete(`operadores/${id}`);
            
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