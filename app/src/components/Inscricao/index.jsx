import React, { useEffect, useState } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import Header from '../Header'
import "./style.css"
import { inscricaoCategoria } from '../../service/inscricaoService'
import { useNavigate } from 'react-router-dom';

function Inscricao() {
    const navigate = useNavigate();
    const [id, setId] = useState('')
    const [categoria, setCategoria] = useState('')

    const dadosString = sessionStorage.getItem('usuario')
    const dados = JSON.parse(dadosString)

    useEffect(() => {
        setId(dados[0].ID)
    }, [])

    const gravarInscricao = async () => {
        const response = await inscricaoCategoria(id, categoria)
        console.log(response)
        navigate("/home");
    }

    return (
        <section>
            <Header />
            <Container>
                <Row>
                    <Col>
                        <Form className="mt-5">
                            <Form.Group controlId="formNome">
                                <Form.Label className="textoFormI">Nome</Form.Label>
                                <Form.Control className="inputFormI" type="text" value={dados[0].Nome} readOnly={true} />
                            </Form.Group>

                            <Form.Group controlId="formEmail">
                                <Form.Label className="textoFormI">Email</Form.Label>
                                <Form.Control className="inputFormI" type="email" value={dados[0].Email} readOnly={true} />
                            </Form.Group>

                            <Form.Group controlId="formCategoria">
                                <Form.Label className="textoFormI">Categoria</Form.Label>
                                <Form.Select className="inputFormI" value={categoria} onChange={(e) => setCategoria(e.target.value)}>
                                    <option>Selecione...</option>
                                    <option value="Mentor">Mentor</option>
                                    <option value="Mentorado">Mentorado</option>
                                    {/* Adicione mais opções conforme necessário */}
                                </Form.Select>
                            </Form.Group>

                            <Button variant="primary" className="mt-3" onClick={gravarInscricao}>
                                Inscrever-se
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Inscricao
