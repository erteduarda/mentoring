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



function Sessao() {

    return (
        <section>
            <Header />
            <Container>
                <Row className="mt-5">
                    <Col>
                        <Cards
                            titulo="Sessão 1"
                            mensagem="Gerencie a sessões 1"
                            textoBotao="Acessar"
                            cor="#4CAF50"
                            caminho="/sessaoespecifica/1"
                        >
                        </Cards>
                    </Col>
                    <Col>
                        <Cards
                            titulo="Sessão 2"
                            mensagem="Gerencie a sessões 2"
                            textoBotao="Acessar"
                            cor="#2196F3"
                            caminho="/sessaoespecifica/2"
                        >
                        </Cards>
                    </Col>
                    <Col>
                        <Cards
                            titulo="Sessão 3"
                            mensagem="Gerencie a sessões 3"
                            textoBotao="Acessar"
                            cor="#FF9800"
                            caminho="/sessaoespecifica/3"
                        >
                        </Cards>
                    </Col>
                    <Col>
                        <Cards
                            titulo="Sessão 4"
                            mensagem="Gerencie a sessões 4"
                            textoBotao="Acessar"
                            cor="#9C27B0"
                            caminho="/sessaoespecifica/4"
                        >
                        </Cards>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col>
                        <Cards
                            titulo="Sessão 5"
                            mensagem="Gerencie a sessões 5"
                            textoBotao="Acessar"
                            cor="#E91E63"
                            caminho="/sessaoespecifica/5"
                        >
                        </Cards>
                    </Col>
                    <Col>
                        <Cards
                            titulo="Sessão 6"
                            mensagem="Gerencie a sessões 6"
                            textoBotao="Acessar"
                            cor="#795548"
                            caminho="/sessaoespecifica/6"
                        >
                        </Cards>
                    </Col>
                    <Col>
                        <Cards
                            titulo="Sessão 7"
                            mensagem="Gerencie a sessões 7"
                            textoBotao="Acessar"
                            cor="#FFC107"
                            caminho="/sessaoespecifica/7"
                        >
                        </Cards>
                    </Col>
                    <Col>
                        <Cards
                            titulo="Sessão 8"
                            mensagem="Gerencie a sessões 8"
                            textoBotao="Acessar"
                            cor="#00BCD4"
                            caminho="/sessaoespecifica/8"
                        >
                        </Cards>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col className="col-3">
                        <Cards
                            titulo="Sessão 9"
                            mensagem="Gerencie a sessões 9"
                            textoBotao="Acessar"
                            cor="#673AB7"
                            caminho="/sessaoespecifica/9"
                        >
                        </Cards>
                    </Col>
                    <Col className="col-3">
                        <Cards
                            titulo="Sessão 10"
                            mensagem="Gerencie a sessões 10"
                            textoBotao="Acessar"
                            cor="#FF5722"
                            caminho="/sessaoespecifica/10"
                        >
                        </Cards>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Sessao