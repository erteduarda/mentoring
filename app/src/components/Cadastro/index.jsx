import React, { useState } from "react"
import { useNavigate } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import { FaUserAlt, FaLock } from 'react-icons/fa'
import { cadastrarUsuario } from '../../service/usuarioService.jsx' // Certifique-se de ter uma função para cadastrar usuário

function Cadastro() {
    const navigate = useNavigate()
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [error, setError] = useState('Informe suas credenciais')
    const [open, setOpen] = useState(false)
    const [openCadastroValido, setOpenCadastroValido] = useState(false)

    const handleCadastro = async (event) => {
        event.preventDefault()
        console.log(JSON.stringify({ nome, email, senha }))
        try {
            // Adapte para a função de cadastro de usuário
            const response = await cadastrarUsuario(nome, email, senha)
            console.log(response)
            // A partir daqui, pode adaptar conforme necessário para o seu caso

            if (!response) {
                setError('Erro ao cadastrar usuário.')
                setOpen(true)
            } else {
                // Salva dados de sessão do usuário se necessário
                setOpen(false)
                setOpenCadastroValido(true);
                navigate("/") // Redireciona para a página de login após o cadastro
            }
        } catch (error) {
            if (!error?.response) {
                setError('Erro ao acessar o servidor')
            } else if (error.response.status === 409) {
                setError('Este e-mail já está em uso. Tente outro.')
            } else {
                setError('Erro ao cadastrar usuário.')
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
                            <img src="/src/assets/image/logoMentoring.png" className="logo" alt="Logo" />
                        </div>
                        <Form className="formulario">
                            <Form.Group className="mb-3 linhaFormulario" controlId="nome">
                                <FaUserAlt />
                                <Form.Control type="text" placeholder="Nome" className="estiloInput" onChange={(event) => setNome(event.target.value)} autoComplete="off" />
                            </Form.Group>
                            <Form.Group className="mb-3 linhaFormulario" controlId="email">
                                <FaUserAlt />
                                <Form.Control type="email" placeholder="E-mail" className="estiloInput" onChange={(event) => setEmail(event.target.value)} autoComplete="off" />
                            </Form.Group>
                            <Form.Group className="mb-3 linhaFormulario" controlId="senha">
                                <FaLock />
                                <Form.Control type="password" placeholder="Senha" className="estiloInput" onChange={(event) => setSenha(event.target.value)} />
                            </Form.Group>
                            <Button variant="warning" className="botao" onClick={(event) => handleCadastro(event)}>Cadastrar</Button>{' '}
                        </Form>
                        <Alert variant="danger" show={open}>
                            {error}
                        </Alert>
                        <Alert variant="success" show={openCadastroValido}>
                            Cadastro realizado com sucesso. Faça o login para continuar.
                        </Alert>
                        <p className="textoInfo">© 2023 | Developed by <strong className="textName">Douglas Felipe</strong></p>
                    </div>
                </Col>
            </Row >
        </Container >
    )
}

export default Cadastro
