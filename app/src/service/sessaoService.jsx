import axios from 'axios'

async function relatoMentorService(relato, id, sessao) {

    try {
        const response = await axios.post(`http://localhost:8001/sessao/mentor`, { relato, id, sessao })
        return response.data
    } catch (error) {
        console.error('Erro na requisição:', error)
        throw error
    }
}

async function relatoMentoradoService(relato, id, sessao) {
    try {
        const response = await axios.post(`http://localhost:8001/sessao/mentorado`, { relato, id, sessao });
        return response.data;
    } catch (error) {
        console.error('Erro na requisição:', error);
        throw error;
    }
}



export {
    relatoMentorService,
    relatoMentoradoService
}
