import axios from 'axios'

async function salvarPolitica(politica) {
    try {
        const response = await axios.post(`http://localhost:8001/politica`, { politica })
        return response.data
    } catch (error) {
        console.error('Erro na requisição:', error)
        throw error
    }
}

async function buscarPolitica() {
    try {
        const response = await axios.get(`http://localhost:8001/politica`)
        return response.data
    } catch (error) {
        console.error('Erro na requisição:', error)
        throw error
    }
}

export {
    salvarPolitica,
    buscarPolitica
}
