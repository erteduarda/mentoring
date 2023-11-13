import axios from 'axios'

async function salvarMesagem(mensagem, id, user) {
    try {
        const response = await axios.post(`http://localhost:8001/chat`, { mensagem, id, user })
        return response.data
    } catch (error) {
        console.error('Erro na requisição:', error)
        throw error
    }
}

async function buscarMensagem(id) {
    try {
        const response = await axios.get(`http://localhost:8001/chat/${id}`)
        return response.data
    } catch (error) {
        console.error('Erro na requisição:', error)
        throw error
    }
}

export {
    salvarMesagem,
    buscarMensagem
}
