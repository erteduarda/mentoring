import React, { useEffect, useState } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import Table from 'react-bootstrap/Table';
import Header from '../Header'
import "./style.css"
import { agenda, buscarAgenda } from '../../service/agendaService'

function Agenda() {
    const [data, setData] = useState('')
    const [hora, setHora] = useState('')
    const [sessao, setSessao] = useState('')
    const [local, setLocal] = useState('')
    const [agendas, setAgendas] = useState([])

    const dadosString = sessionStorage.getItem('usuario')
    const dados = JSON.parse(dadosString)

    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

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

    const handleSubmit = async (e) => {
        e.preventDefault()
        // Aqui você pode fazer algo com os dados, como enviá-los para um servidor
        console.log('Dados enviados:', { data, sessao, hora, dados, local })

        const response = await agenda(data, sessao, hora, dados, local)
        console.log(response)
        if(response === 'Sessão já existe.') {
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: "Sessão já existe.",
                showConfirmButton: false,
                timer: 1500
            })
        } else {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Agenda Gravada.",
                showConfirmButton: false,
                timer: 1500
            })
        }
        
        const responseBusca = await buscarAgenda(dados[0].relacionamentoID);
        setAgendas(responseBusca);
    }

    function formatarDataParaString(data) {
        const ano = data.getFullYear();
        const mes = String(data.getMonth() + 1).padStart(2, '0'); // O mês começa do zero
        const dia = String(data.getDate()).padStart(2, '0');

        return `${dia}/${mes}/${ano}`;
    }



    return (
        <section>
            <Header />
            <Container>
                <Row>
                    <Col>
                        <Form className="mt-5" onSubmit={handleSubmit}>
                            <Form.Group controlId="formCategoria">
                                <Form.Label className="textoFormA">Sessão</Form.Label>
                                <Form.Select className="inputFormA" value={sessao} onChange={(e) => setSessao(e.target.value)}>
                                    <option>Selecione...</option>
                                    {array.map((item, index) => (
                                        <option key={index} value={`${item}`}>Sessão {item}</option>
                                    ))}
                                </Form.Select>
                            </Form.Group>
                            <Row>
                                <Col>
                                    <Form.Group controlId="formNome">
                                        <Form.Label className="textoFormA">Data</Form.Label>
                                        <Form.Control className="data" type="date" onChange={(e) => setData(e.target.value)} />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group controlId="formNome">
                                        <Form.Label className="textoFormA">Hora</Form.Label>
                                        <Form.Control className="hora" type="time" onChange={(e) => setHora(e.target.value)} />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group controlId="formNome">
                                        <Form.Label className="textoFormA">Local</Form.Label>
                                        <Form.Control className="local" type="text" onChange={(e) => setLocal(e.target.value)} />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Button variant="primary" type="submit" className="mt-3">
                                Gravar
                            </Button>
                        </Form>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Table striped bordered hover className='mt-5'>
                            <thead>
                                <tr>
                                    <th>Sessão</th>
                                    <th>Data</th>
                                    <th>Hora</th>
                                    <th>Local</th>
                                </tr>
                            </thead>
                            <tbody>
                                {agendas.map(item => (
                                    <tr key={item.ID}>
                                        <td>{item.NumeroSessao}</td>
                                        <td>{formatarDataParaString(new Date(item.Data))}</td>
                                        <td>{item.Hora}</td>
                                        <td>{item.Local}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Agenda

