import React, { useState } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import Header from '../Header'
import "./style.css"

function Agenda() {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [categoria, setCategoria] = useState('')

    const dadosString = sessionStorage.getItem('usuario')
    const dados = JSON.parse(dadosString)

    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    const handleSubmit = (e) => {
        e.preventDefault()
        // Aqui você pode fazer algo com os dados, como enviá-los para um servidor
        console.log('Dados enviados:', { nome, email, categoria })
        // Limpar os campos após o envio
        setNome('')
        setEmail('')
        setCategoria('')
    }

    return (
        <section>
            <Header />
            <Container>
                <Row>
                    <Col>
                        <Form className="mt-5" onSubmit={handleSubmit}>
                            <Form.Group controlId="formCategoria">
                                <Form.Label className="textoFormA">Categoria</Form.Label>
                                <Form.Select className="inputFormA" value={categoria} onChange={(e) => setCategoria(e.target.value)}>
                                    <option>Selecione...</option>
                                    {array.map((item, index) => (
                                        <option value="Mentor">Sessão {item}</option>
                                    ))}
                                    
                                    {/* Adicione mais opções conforme necessário */}
                                </Form.Select>
                            </Form.Group>
                            <Row>
                                <Col>
                                    <Form.Group controlId="formNome">
                                        <Form.Label className="textoFormA">Data</Form.Label>
                                        <Form.Control className="inputFormA" type="date" value={dados[0].Nome} readOnly={true} />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group controlId="formNome">
                                        <Form.Label className="textoFormA">Hora</Form.Label>
                                        <Form.Control className="inputFormA" type="time" value={dados[0].Nome} readOnly={true} />
                                    </Form.Group>
                                </Col>
                            </Row>
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

export default Agenda
