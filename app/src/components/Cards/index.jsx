import { useNavigate } from 'react-router-dom'
//importação de elementos bootstrap
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
//importação do CSS
import "./style.css"

function Cards({ titulo, mensagem, textoBotao, cor, caminho }) {
    const navigate = useNavigate()

    const navegar = (event) => {
        navigate(caminho);
    }

    return (
        <Card>
            <Card.Header as="h5" style={{ backgroundColor: cor }}></Card.Header>
            <Card.Body>
                <Card.Title>{titulo}</Card.Title>
                <Card.Text>
                    {mensagem}
                </Card.Text>
                <Button style={{ backgroundColor: cor, borderColor: 'transparent' }} onClick={navegar}>{textoBotao}</Button>
            </Card.Body>
        </Card>
    )
}

export default Cards