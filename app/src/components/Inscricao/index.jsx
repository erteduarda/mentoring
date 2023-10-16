import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import Header from '../Header';

function Inscricao() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [categoria, setCategoria] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aqui você pode fazer algo com os dados, como enviá-los para um servidor
        console.log('Dados enviados:', { nome, email, categoria });
        // Limpar os campos após o envio
        setNome('');
        setEmail('');
        setCategoria('');
    };

    return (
        <section>
            <Header />
            <Container>
                <Row>
                    <Col>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="formNome">
                                <Form.Label>Nome:</Form.Label>
                                <Form.Control type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
                            </Form.Group>

                            <Form.Group controlId="formEmail">
                                <Form.Label>Email:</Form.Label>
                                <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </Form.Group>

                            <Form.Group controlId="formCategoria">
                                <Form.Label>Categoria:</Form.Label>
                                <Form.Select value={categoria} onChange={(e) => setCategoria(e.target.value)}>
                                    <option>Selecione...</option>
                                    <option value="categoria1">Mentor</option>
                                    <option value="categoria2">Mentorado</option>
                                    {/* Adicione mais opções conforme necessário */}
                                </Form.Select>
                            </Form.Group>

                            <Button variant="primary" type="submit">
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
