import axios from 'axios'

async function loginUsuario(email, senha) {
    try {
        const response = await axios.get(`http://localhost:8001/usuario/${email}/${senha}`)
        return response.data
    } catch (error) {
        console.error('Erro na requisição:', error)
        throw error
    }
}

async function cadastrarUsuario(nome, email, senha) {
    try {
        const response = await axios.get(`http://localhost:8001/usuario/${email}/${senha}/${nome}`)
        return response.data
    } catch (error) {
        console.error('Erro na requisição:', error)
        throw error
    }
}

async function buscarUsuario() {
    try {
        const response = await axios.get(`http://localhost:8001/usuario`)
        return response.data
    } catch (error) {
        console.error('Erro na requisição:', error)
        throw error
    }
}

export {
    loginUsuario,
    cadastrarUsuario,
    buscarUsuario
}
