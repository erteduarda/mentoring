import axios from 'axios'

async function inscricaoCategoria(id, categoria) {
    try {
        const response = await axios.post(`http://localhost:8001/inscricao/${id}/${categoria}`)
        return response.data
    } catch (error) {
        console.error('Erro na requisição:', error)
        throw error;
    }
}

async function listarInscricoes(id, categoria) {
    try {
        const response = await axios.get(`http://localhost:8001/inscricao/aprovados`)
        return response.data
    } catch (error) {
        console.error('Erro na requisição:', error)
        throw error;
    }
}

async function listarInscricoesNap() {
    try {
        const response = await axios.get(`http://localhost:8001/inscricao/`)
        return response.data
    } catch (error) {
        console.error('Erro na requisição:', error)
        throw error;
    }
}

async function aprovarUsuario(id) {
    try {
        const response = await axios.get(`http://localhost:8001/inscricao/aprovar/${id}`)
        return response.data
    } catch (error) {
        console.error('Erro na requisição:', error)
        throw error;
    }
}

async function salvarRelacao(relacao) {
    try {
        const response = await axios.post('http://localhost:8001/inscricao/relacao', { relacao });
        console.log(response.data);
        return response.data;
    } catch (error) {
        if (error.response) {
            // O servidor respondeu com um status code diferente de 2xx
            console.error('Erro ao salvar no servidor. Status:', error.response.status);
            console.error('Resposta do servidor:', error.response.data);
        } else if (error.request) {
            // A requisição foi feita, mas não recebeu resposta
            console.error('Sem resposta do servidor. Requisição feita, mas sem resposta.');
        } else {
            // Algo aconteceu ao configurar a requisição
            console.error('Erro ao configurar a requisição:', error.message);
        }
        throw error;
    }
}



export {
    inscricaoCategoria,
    listarInscricoes,
    salvarRelacao,
    listarInscricoesNap,
    aprovarUsuario
}