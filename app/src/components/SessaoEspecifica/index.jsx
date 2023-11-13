import React, { useState, useEffect } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import Header from '../Header'
import "./style.css"
import { relatoMentorService, relatoMentoradoService } from '../../service/sessaoService'
import { buscarAgenda } from '../../service/agendaService'

function SessaoEspecifica() {
    const [relatoMentor, setRelatoMentor] = useState('')
    const [relatoMentorado, setRelatoMentorado] = useState('')
    const [categoria, setCategoria] = useState('')
    const [agendas, setAgendas] = useState([])

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
                        <Form className="mt-5 mb-5" onSubmit={relatoMentoradoSubmit}>
                            <Form.Group controlId="formEmail">
                                <Form.Label className="textoFormS">Relato Mentorado</Form.Label>
                                <Form.Control className="inputFormS" as="textarea" rows={3} onChange={(e) => setRelatoMentorado(e.target.value)} placeholder={agendas.find((item) => item.NumeroSessao === Number(id))?.RelatoMentorado || "Nenhum relato registrado."} />
                            </Form.Group>
                            <Button variant="primary" type="submit" className="mt-3 mb-5">
                                Gravar
                            </Button>
                            <Form.Group controlId="formFile" className="mb-3">
                                <Form.Label className="textoFormS">Registro da sessão</Form.Label>
                                <Form.Control className="inputFormS" type="file" />
                            </Form.Group>
                            <Button variant="primary" type="submit" className="mt-3">
                                Gravar
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default SessaoEspecifica;