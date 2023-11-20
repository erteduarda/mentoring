import React, { useState, useEffect } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import Header from '../Header'
import "./style.css"
import { relatoMentorService, relatoMentoradoService, gravaImagem } from '../../service/sessaoService'
import { buscarAgenda } from '../../service/agendaService'

function SessaoEspecifica() {
    const [relatoMentor, setRelatoMentor] = useState('')
    const [relatoMentorado, setRelatoMentorado] = useState('')
    const [categoria, setCategoria] = useState('')
    const [agendas, setAgendas] = useState([])
    const [imagemBase64, setImagemBase64] = useState("");


    const { id } = useParams()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const responseBusca = await buscarAgenda(dados[0].relacionamentoID);
                setAgendas(responseBusca);
            } catch (error) {
                console.error('Erro na requisição:', error);
            }
        };

        fetchData();
    }, []);

    const dadosString = sessionStorage.getItem('usuario')
    const dados = JSON.parse(dadosString)

    const relatoMentorSubmit = async (e) => {
        e.preventDefault();
        console.log('Dados enviados:', { relatoMentor, relacionamentoID: dados && dados[0].relacionamentoID, id });

        try {
            const response = await relatoMentorService(relatoMentor, dados[0].relacionamentoID, id);
            console.log(response);
            // Limpar campos do formulário após o sucesso
            setRelatoMentor('');
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Relato Gravado.",
                showConfirmButton: false,
                timer: 1500
            })
            const responseBusca = await buscarAgenda(dados[0].relacionamentoID);
            setAgendas(responseBusca)
        } catch (error) {
            console.error('Erro ao enviar relato do mentor:', error);
            // Lógica para lidar com o erro (ex.: exibir mensagem para o usuário)
        }
    };

    const relatoMentoradoSubmit = async (e) => {
        e.preventDefault();
        console.log('Dados enviados:', { relatoMentorado, relacionamentoID: dados && dados[0].relacionamentoID, id });

        try {
            const response = await relatoMentoradoService(relatoMentorado, dados[0].relacionamentoID, id);
            console.log(response);
            // Limpar campos do formulário após o sucesso
            setRelatoMentor('');
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Relato Gravado.",
                showConfirmButton: false,
                timer: 1500
            })
            const responseBusca = await buscarAgenda(dados[0].relacionamentoID);
            setAgendas(responseBusca)
        } catch (error) {
            console.error('Erro ao enviar relato do mentor:', error);
            // Lógica para lidar com o erro (ex.: exibir mensagem para o usuário)
        }
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                setImagemBase64(event.target.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const imagemSubmit = async (e) => {
        e.preventDefault();
        console.log('Dados enviados:', { imagemBase64, relacionamentoID: dados && dados[0].relacionamentoID, id });

        try {
            const response = await gravaImagem(imagemBase64, dados[0].relacionamentoID, id);
            console.log(response);
            // Limpar campos do formulário após o sucesso
            setImagemBase64('');
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Imagem Gravada.",
                showConfirmButton: false,
                timer: 1500
            })
            const responseBusca = await buscarAgenda(dados[0].relacionamentoID);
            setAgendas(responseBusca)
            console.log(responseBusca)
        } catch (error) {
            console.error('Erro ao enviar imagem:', error);
            // Lógica para lidar com o erro (ex.: exibir mensagem para o usuário)
        }
    };

    return (
        <section>
            <Header />
            <Container>
                <Row>
                    <Col>
                        <Form className="mt-5">
                            <Form.Group controlId="formNome">
                                <Form.Label className="textoFormS">Relato Mentor</Form.Label>
                                <Form.Control className="inputFormS" as="textarea" rows={3} onChange={(e) => setRelatoMentor(e.target.value)} placeholder={agendas.find((item) => item.NumeroSessao === Number(id))?.RelatoMentor || "Nenhum relato registrado."} />
                            </Form.Group>
                            <Button variant="primary" onClick={relatoMentorSubmit} className="mt-3 mb-5">
                                Gravar
                            </Button>
                        </Form>
                        {/* Segundo bloco de formulário */}
                        <Form className="mt-2" onSubmit={relatoMentoradoSubmit}>
                            <Form.Group controlId="formEmail">
                                <Form.Label className="textoFormS">Relato Mentorado</Form.Label>
                                <Form.Control className="inputFormS" as="textarea" rows={3} onChange={(e) => setRelatoMentorado(e.target.value)} placeholder={agendas.find((item) => item.NumeroSessao === Number(id))?.RelatoMentorado || "Nenhum relato registrado."} />
                            </Form.Group>
                            <Button variant="primary" type="submit" className="mt-3 mb-5">
                                Gravar
                            </Button>
                            {/* Resto do formulário */}
                        </Form>
                        {/* Formulário para envio da imagem */}
                        <Form className="mt-2 mb-5">
                            <Form.Group controlId="formFile" className="mb-3">
                                <Form.Label className="textoFormS">Registro da sessão</Form.Label>
                                <Form.Control className="inputFormS" type="file" onChange={handleFileChange} />
                                <Button variant="primary" className="mt-3" onClick={imagemSubmit}>
                                    Gravar Imagem
                                </Button>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
                {
                    agendas.find((item) => item.NumeroSessao === Number(id))?.Img &&
                    <img src={agendas.find((item) => item.NumeroSessao === Number(id))?.Img} alt="Descrição da Imagem" width="250px" height="250px"/>
                }
            </Container>
        </section>
    )
}

export default SessaoEspecifica;