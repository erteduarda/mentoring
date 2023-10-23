import React, { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom';
//importação de elementos bootstrap
import Container from "react-bootstrap/esm/Container"
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Badge from 'react-bootstrap/Badge'
import Table from 'react-bootstrap/Table'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
//importação do CSS
import './style.css'
//importação de icones
//APIs
import { listarInscricoes, salvarRelacao } from "../../service/inscricaoService"
//importação de componentes
import Header from "../Header/index.jsx"

function GerenciarInscricao() {
    const navigate = useNavigate();
    const [lista, setLista] = useState([])
    const [relacoes, setRelacoes] = useState([])

    useEffect(() => {
        listar()
    }, []);

    const listar = async () => {
        const response = await listarInscricoes()
        setLista(response)
    }

    const handleRelacaoChange = (mentorID, mentoradoID) => {
        // Verifica se a relação já existe
        const existeRelacao = relacoes.some(relacao => relacao.mentorID === mentorID)
        // Atualiza o estado com base na existência da relação
        setRelacoes(prevRelacoes => {
            if (existeRelacao) {
                // Se a relação já existe, atualize-a
                return prevRelacoes.map(relacao =>
                    relacao.mentorID === mentorID ? { ...relacao, mentoradoID } : relacao
                )
            } else {
                // Se a relação não existe, adicione-a
                return [...prevRelacoes, { mentorID, mentoradoID }]
            }
        })
    }

    async function salvar() {
        console.log(relacoes)
        const response = await salvarRelacao(relacoes)
    }

    return (
        <section>
            <Header />
            <Container>
                <Form>
                    <Row className="mt-5">
                        <Col className="col-12">
                            <h4>Tabela de Inscritos</h4>
                            <p>Tabela de inscritos para <Badge bg="secondary">mentor</Badge> e <Badge bg="secondary">mentorado</Badge></p>
                        </Col>
                        <Col>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>Mentor</th>
                                        <th>Mentorado</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {lista.map((item, index) => (
                                        item.Papel === "Mentor" && (
                                            <tr key={index}>
                                                <td>{item.Nome}</td>
                                                <td>
                                                    <Form.Select
                                                        aria-label="Default select example"
                                                        className="inputFormGI"
                                                        value={relacoes.find(relacao => relacao.mentorID === item.UsuarioID)?.mentoradoID || ''}
                                                        onChange={(e) => handleRelacaoChange(item.UsuarioID, e.target.value)}
                                                    >
                                                        <option>Selecione Mentorado</option>
                                                        {lista.map((itemOp, indexOp) => (
                                                            itemOp.Papel === "Mentorado" && (
                                                                <option key={indexOp} value={itemOp.UsuarioID}>{itemOp.Nome}</option>
                                                            )
                                                        ))}
                                                    </Form.Select>
                                                </td>
                                            </tr>
                                        )
                                    ))}
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                    <Button variant="primary" className="mt-3 mb-5" onClick={salvar}>
                        Gravar
                    </Button>
                </Form>
            </Container>
        </section >
    )
}

export default GerenciarInscricao