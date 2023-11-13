import axios from 'axios'

async function agenda(data, sessao, hora, dados, local) {
    try {
        const response = await axios.post(`http://localhost:8001/agendar`, { data, sessao, hora, dados, local })
        return response.data
    } catch (error) {
        console.error('Erro na requisição:', error)
        throw error
    }
}

async function buscarAgenda(dados) {
    try {
        const response = await axios.get(`http://localhost:8001/agendar/agenda/${dados}`);
        // Retorna diretamente os dados da resposta
        return response.data;
    } catch (error) {
        console.error('Erro na requisição:', error);
        throw error;
    }
}



export {
    agenda,
    buscarAgenda
}
