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



function Administrador() {

    return (
        <section>
            <Header />
            <Container>
                <Row className="mt-5">
                    <Col>
                        <Cards
                            titulo="Acompanhar Inscrições"
                            mensagem="Gerencie inscrições"
                            textoBotao="Acessar"
                            cor="#82868b"
                            caminho="/acompanharinscricao"
                        >
                        </Cards>
                    </Col>
                    <Col>
                        <Cards
                            titulo="Relatório"
                            mensagem="Gerar Relatório"
                            textoBotao="Acessar"
                            cor="#82868b"
                            caminho="/relatorio"
                        >
                        </Cards>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Administrador