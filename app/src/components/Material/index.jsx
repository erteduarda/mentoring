import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import Header from '../Header';

function Material() {
    const listaLinks = [
        { nome: 'PDF', link: 'URL do PDF' },
        { nome: 'Vídeos', link: 'URL dos Vídeos' },
        { nome: 'E-book', link: 'URL do E-book' },
        { nome: 'Links', link: 'URL dos Links' },
    ];

    const permissaoLogada = 1;

    const handleLinkEdit = (linkIndex, newLink) => {
        // Lógica para editar o link, se necessário
        console.log(`Editar link ${linkIndex}: ${newLink}`);
    };

    return (
        <section>
            <Header></Header>
            <Container>
                <div className="row">
                    {listaLinks.map((link, index) => (
                        <div className="col-12" key={index} style={{margin: '10px'}}>
                            <div className="card">
                                <div className="card-header flex-column align-items-start pb-0">
                                    <h2 className="fw-bolder mt-1">{link.nome}</h2>
                                </div>
                                <div id="line-area-chart-1" style={{ padding: '15px' }}>
                                    <a href={link.link} className="btn btn-success" target="_blank">
                                        Acessar
                                    </a>
                                    {permissaoLogada === 1 && (
                                        <>
                                            <Form.Control
                                                type="text"
                                                className="form-control mt-1"
                                                id={`link_${link.nome.toLowerCase()}`}
                                                name={`link_${link.nome.toLowerCase()}`}
                                                placeholder={link.link}
                                                onChange={(e) => handleLinkEdit(index, e.target.value)}
                                            />
                                            <Button
                                                type="submit"
                                                className="btn btn-primary mt-1"
                                                style={{ background: '#adb5bd', border: 'none' }}
                                                onClick={() => handleLinkEdit(index, e.target.value)}
                                            >
                                                Editar
                                            </Button>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}

export default Material;
