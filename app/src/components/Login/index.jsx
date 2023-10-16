import React from "react"
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
//importação de elementos bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
//importação do CSS
import './style.css'
//importação de icones
import { FaUserAlt, FaLock } from 'react-icons/fa';
//APIs
import { loginUsuario } from '../../service/usuarioService.jsx'

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState(0)
    const [senha, setSenha] = useState('')
    const [error, setError] = useState('Informe suas credenciais')
    const [open, setOpen] = useState(false)
    const [openLoginValido, setOpenLoginValido] = useState(false)

    const handleLogin = async (event) => {
        event.preventDefault()
        console.log(JSON.stringify({ email, senha }))
        try {
            //valida credenciais
            const response = await loginUsuario(email, senha)
            if (!response.length) {
                setError('Usuário ou senha inválidos.')
                setOpen(true)
            } else {
                //salva dados de sessão do usuário
                sessionStorage.setItem('usuario', JSON.stringify(response));
                //atribuido valores as constantes
                setOpen(false)
                setOpenLoginValido(true)
                //redireciona usuário logado
                navigate("/home");
            }
        } catch (error) {
            if (!error?.response) {
                setError('Erro ao acessar o servidor');
            } else if (error.response.status == 401) {
                setError('Usuário ou senha inválidos.')
            }
            setOpen(true)
        }
    }

    return (
        <Container>
            <Row>
                <Col xs={12} className="posicao">
                    <div className="corpoLogin">
                        <div className="logoLogin">
                            <img src="/src/assets/image/logoMentoring.png" className="logo" />
                        </div>
                        <Form className="formulario">
                            <Form.Group className="mb-3 linhaFormulario" controlId="email">
                                <FaUserAlt />
                                <Form.Control type="email" placeholder="E-mail" className="estiloInput" onChange={(event) => setEmail(event.target.value)} autoComplete="off" />
                            </Form.Group>
                            <Form.Group className="mb-3 linhaFormulario" controlId="senha">
                                <FaLock />
                                <Form.Control type="password" placeholder="Senha" className="estiloInput" onChange={(event) => setSenha(event.target.value)} />
                            </Form.Group>
                            <Button variant="warning" className="botao" onClick={(event) => handleLogin(event)}>Entrar</Button>{' '}
                        </Form>
                        <a href="/cadastro">Cadastre-se aqui</a>
                        <Alert variant="danger" show={open}>
                            {error}
                        </Alert>
                        <Alert variant="success" show={openLoginValido}>
                            Login realizado com sucesso.
                        </Alert>
                        <p className="textoInfo">© 2023 | Developed by <strong className="textName">Douglas Felipe</strong></p>
                    </div>
                </Col>
            </Row >
        </Container >
    )
}

export default Login