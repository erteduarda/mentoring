import axios from 'axios'

async function materiais(link, nome, id) {
    try {
        const response = await axios.post(`http://localhost:8001/materiais`, { link, nome, id })
        return response.data
    } catch (error) {
        console.error('Erro na requisição:', error)
        throw error
    }
}

async function buscamateriais(id) {
    try {
        const response = await axios.get(`http://localhost:8001/materiais/${id}`)
        return response.data
    } catch (error) {
        console.error('Erro na requisição:', error)
        throw error
    }
}

export {
    materiais,
    buscamateriais
}
