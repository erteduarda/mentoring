import React, { useState, useEffect } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import Header from '../Header';
import './style.css';
import { buscarPolitica, salvarPolitica } from '../../service/politica';

function Politica() {
    const [content, setContent] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            try {
                const responseBusca = await buscarPolitica();
                const valor = responseBusca[0].politica
                console.log(valor)
                setContent(valor);
                console.log(responseBusca)
            } catch (error) {
                console.error('Erro na requisição:', error);
            }
        };

        fetchData();
    }, []);

    const handleSave = async () => {
        const response = await salvarPolitica(content)

        const valor = response.politica
        console.log(valor)
        console.log('Conteúdo salvo:', content);
    };

    return (
        <section>
            <Header />
            <Container className="editable-page-container">
                <h1>Política de Privacidade</h1>
                <Form>
                    <Form.Group controlId="content">
                        <Form.Control
                            as="textarea"
                            rows={40}
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                        />
                    </Form.Group>
                    <Button variant="primary" onClick={handleSave} style={{ margin: '10px' }}>
                        Salvar
                    </Button>
                </Form>
            </Container>
        </section>
    );
}

export default Politica;
