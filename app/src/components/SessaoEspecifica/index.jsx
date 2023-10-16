import React, { useState } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import Header from '../Header'
import "./style.css"

function SessaoEspecifica() {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [categoria, setCategoria] = useState('')

    const dadosString = sessionStorage.getItem('usuario')
    const dados = JSON.parse(dadosString)

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
                            <Form.Group controlId="formNome">
                                <Form.Label className="textoFormS">Relato Mentor</Form.Label>
                                <Form.Control className="inputFormS" as="textarea" rows={3} />
                            </Form.Group>
                            <Button variant="primary" type="submit" className="mt-3 mb-5">
                                Gravar
                            </Button>
                            <Form.Group controlId="formEmail">
                                <Form.Label className="textoFormS">Relato Mentorado</Form.Label>
                                <Form.Control className="inputFormS" as="textarea" rows={3} />
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

export default SessaoEspecifica
