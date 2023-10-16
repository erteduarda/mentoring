import React from "react"
//importação de elementos bootstrap
import Container from "react-bootstrap/esm/Container"
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
//importação do CSS
import './style.css'
//importação de icones
//APIs
//importação de componentes
import Header from "../Header/index.jsx"
import Cards from "../Cards/index.jsx"



function HomePage() {

    return (
        <section>
            <Header />
            <Container>
                <Row className="mt-5">
                    <Col>
                        <Cards
                            titulo="Sessão"
                            mensagem="Gerencie suas sessões"
                            textoBotao="Acessar"
                            cor="#ea5455"
                            caminho="/sessao"
                        >
                        </Cards>
                    </Col>
                    <Col>
                        <Cards
                            titulo="Agenda"
                            mensagem="Agende ou visualize suas sessão"
                            textoBotao="Acessar"
                            cor="#28c76f"
                            caminho="/agenda"
                        >
                        </Cards>
                    </Col>
                    <Col>
                        <Cards
                            titulo="Manual"
                            mensagem="Instruções do programa mentoring"
                            textoBotao="Acessar"
                            cor="#00cfe8"
                            caminho="/manual"
                        >
                        </Cards>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col>
                        <Cards
                            titulo="Materiais"
                            mensagem="Acesse os materiais disponíveis"
                            textoBotao="Acessar"
                            cor="#ff9f43"
                            caminho="/material"
                        >
                        </Cards>
                    </Col>
                    <Col>
                        <Cards
                            titulo="Política"
                            mensagem="Leia sobre nossa política"
                            textoBotao="Acessar"
                            cor="#82868b"
                            caminho="/politicas"
                        >
                        </Cards>
                    </Col>
                    <Col>
                        <Cards
                            titulo="Inscrição"
                            mensagem="Seja mentor ou mentee"
                            textoBotao="Acessar"
                            cor="#82868b"
                            caminho="/inscricao"
                        >
                        </Cards>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default HomePage