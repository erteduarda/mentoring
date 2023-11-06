import React, { useState } from 'react';
import './style.css'; // Substitua pelo caminho correto do seu CSS
import { Form, Button, Container, Row, Col, ListGroup, Card } from 'react-bootstrap';
import Header from '../Header';

function Manual() {
    const cor = [
        '#FFD700',
        '#FFA500',
        '#FF4500',
        '#8B0000',
        '#C71585',
        '#8B008B',
        '#87CEFA',
        '#4682B4',
        '#000080',
        '#48D1CC',
    ];

    const [instrucoes, setInstrucoes] = useState([
        { descricao: 'Instrução 1' },
        { descricao: 'Instrução 2' },
        { descricao: 'Instrução 3' },
        { descricao: 'Instrução 4' },
        { descricao: 'Instrução 5' },
        { descricao: 'Instrução 6' },
        { descricao: 'Instrução 7' },
        { descricao: 'Instrução 8' },
        { descricao: 'Instrução 9' },
        { descricao: 'Instrução 10' },
    ]);

    const inserir = () => {
        Swal.fire({
            text: 'Passo Atualizado!',
        });
    };

    const handleDescricaoChange = (index, value) => {
        const newInstrucoes = [...instrucoes];
        newInstrucoes[index].descricao = value;
        setInstrucoes(newInstrucoes);
    };

    const salvarInstrucao = (index) => {
        // Lógica para salvar a instrução
        inserir();
    };

    return (
        <section>
            <Header></Header>
            <Container>
                <div className="row">
                    {instrucoes.map((p, index) => (
                        <div className="col-12" key={index}>
                            <div className="card" style={{ margin: '10px' }}>
                                <div className="card-header flex-column align-items-start pb-0">
                                    <h2 className="fw-bolder mt-1" style={{ color: cor[index] }}>
                                        Passo {index + 1}
                                    </h2>
                                </div>
                                <Form>
                                    <div id="line-area-chart-1" style={{ padding: '15px' }}>
                                        {sessionStorage.getItem('permissao_logada') == 1 ? (
                                            <>
                                                <Form.Control
                                                    as="textarea"
                                                    rows="3"
                                                    name="descricao"
                                                    value={p.descricao}
                                                    onChange={(e) => handleDescricaoChange(index, e.target.value)}
                                                />
                                                <div className="row mt-2">
                                                    <div className="col-sm-4">
                                                        <Button
                                                            className="btn btn-primary mb-1"
                                                            style={{ background: '#adb5bd', border: 'none' }}
                                                            onClick={() => salvarInstrucao(index)}
                                                        >
                                                            Gravar
                                                        </Button>
                                                    </div>
                                                </div>
                                            </>
                                        ) : (
                                            <p>{p.descricao}</p>
                                        )}
                                    </div>
                                </Form>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}

export default Manual;
