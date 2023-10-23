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

async function salvarRelacao(relacao) {
    try {
        const response = await fetch('http://localhost:8001/inscricao', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ relacao }),
        });

        if (response.ok) {
            const data = await response.json();
            console.log('Resposta do servidor:', data);
        } else {
            console.error('Erro na requisição:', response.statusText);
            console.log('Resposta do servidor (erro):', await response.text());
        }
    } catch (error) {
        console.error('Erro na requisição:', error);
        throw error;
    }
}


export {
    inscricaoCategoria,
    listarInscricoes,
    salvarRelacao
}