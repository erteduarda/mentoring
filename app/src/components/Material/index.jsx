import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import Header from '../Header';
import { useState, useEffect } from 'react';
import { materiais, buscamateriais } from '../../service/materiais';

function Material() {
    const dadosString = sessionStorage.getItem('usuario')
    const dados = JSON.parse(dadosString)
    const listaLinks = [
        { nome: 'PDF', link: 'URL do PDF' },
        { nome: 'Vídeos', link: 'URL dos Vídeos' },
        { nome: 'E-book', link: 'URL do E-book' },
        { nome: 'Links', link: 'URL dos Links' },
    ];

    const [materiaisList, setMateriais] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const responseBusca = await buscamateriais(dados[0].relacionamentoID);
                setMateriais(responseBusca);
                console.log(responseBusca, dados[0].relacionamentoID)
            } catch (error) {
                console.error('Erro na requisição:', error);
            }
        };

        fetchData();
    }, []);

    console.log(materiaisList)
    const [link, setLink] = useState('')

    const permissaoLogada = 1;

    const enviarLink = async (nome) => {
        console.log(link, nome)

        const response = await materiais(link, nome, dados[0].relacionamentoID)
        console.log(response)

        const responseBusca = await buscamateriais(dados[0].relacionamentoID);
        setMateriais(responseBusca);
    }

    return (
        <section>
            <Header></Header>
            <Container>
                <div className="row">
                    {listaLinks.map((link, index) => (
                        <div className="col-12" key={index} style={{ margin: '10px' }}>
                            <div className="card">
                                <div className="card-header flex-column align-items-start pb-0">
                                    <h2 className="fw-bolder mt-1">{link.nome}</h2>
                                </div>
                                <div id="line-area-chart-1" style={{ padding: '15px' }}>
                                    <a
                                        href={
                                            (materiaisList.find((item) => item.Tipo === link.nome)?.Link || link.link)
                                                ? "http://" +
                                                (materiaisList.find((item) => item.Tipo === link.nome)?.Link || link.link)
                                                : ""
                                        }
                                        className="btn btn-success"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Acessar
                                    </a>

                                    {permissaoLogada === 1 && (
                                        <>
                                            <Form.Control
                                                type="text"
                                                className="form-control mt-1"
                                                id={`link_${link.nome.toLowerCase()}`}
                                                name={`link_${link.nome.toLowerCase()}`}
                                                placeholder={materiaisList.find((item) => item.Tipo === link.nome)?.Link || link.link}
                                                onChange={(e) => setLink(e.target.value)}
                                            />
                                            <Button
                                                type="submit"
                                                className="btn btn-primary mt-1"
                                                style={{ background: '#adb5bd', border: 'none' }}
                                                onClick={() => enviarLink(link.nome)}
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
