import axios from 'axios'

// Logar usuario
async function loginUsuario(email, senha) {
    try {
        const response = await axios.get(`http://localhost:8001/usuario/${email}/${senha}`)
        return response.data
    } catch (error) {
        console.error('Erro na requisição:', error)
        throw error
    }
}

// Cadastrar usuario
async function cadastrarUsuario(nome, email, senha) {
    try {
        const response = await axios.get(`http://localhost:8001/usuario/${email}/${senha}/${nome}`)
        return response.data
    } catch (error) {
        console.error('Erro na requisição:', error)
        throw error
    }
}

export {
    loginUsuario,
    cadastrarUsuario
}
