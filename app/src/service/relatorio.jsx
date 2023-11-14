import axios from 'axios'

async function buscarRelatorio(dados) {
    try {
        const response = await axios.get(`http://localhost:8001/relatorio/${dados}`);
        // Retorna diretamente os dados da resposta
        return response.data;
    } catch (error) {
        console.error('Erro na requisição:', error);
        throw error;
    }
}

export {
    buscarRelatorio
}
