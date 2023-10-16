import React from "react"
//importação de elementos bootstrap
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
//importação do CSS
import './style.css'

function Header() {
    return (
        <section>
            <Navbar bg="light" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="/home">
                        <img
                            alt=""
                            src="/src/assets/image/logoMentoring.png"
                            width="120"
                            className="d-inline-block align-top"
                        />{' '}
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/home" className="texto">Início</Nav.Link>
                        <Nav.Link href="/administrador" className="texto">Administrador</Nav.Link>
                        <Nav.Link href="/inscricao" className="texto">Inscrições</Nav.Link>
                        <Nav.Link href="/sessao" className="texto">Sessões</Nav.Link>
                        <Nav.Link href="/agenda" className="texto">Agenda</Nav.Link>
                        <Nav.Link href="/manual" className="texto">Manual</Nav.Link>
                        <Nav.Link href="/material" className="texto">Material</Nav.Link>
                        <Nav.Link href="/politicas" className="texto">Políticas</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </section>
    )
}

export default Header