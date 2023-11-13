import React, { useState, useEffect } from 'react';
import { Form, Button, Container, Row, Col, ListGroup, Card } from 'react-bootstrap';
import Header from '../Header';
import './style.css';
import { salvarMesagem, buscarMensagem } from '../../service/chat';

function Chat() {
    const [message, setMessage] = useState('');
    const [mensagens, setMensagens] = useState([]);
    const [chatHistory, setChatHistory] = useState([]);
    const [selectedConversation, setSelectedConversation] = useState(null);
    const dadosString = sessionStorage.getItem('usuario')
    const dados = JSON.parse(dadosString)
    console.log(dados)
    const conversations = [
        { id: 1, name: 'Conversa 1', messages: [] },
        // Adicione mais conversas conforme necessário
    ];

    useEffect(() => {
        const fetchData = async () => {
            try {
                const responseBusca = await buscarMensagem(dados[0].relacionamentoID);
                console.log(responseBusca);
                setMensagens(responseBusca);
            } catch (error) {
                console.error('Erro na requisição:', error);
            }
        };

        const intervalId = setInterval(() => {
            fetchData();
        }, 1000); // Chama fetchData a cada 1000 milissegundos (1 segundo)

        return () => {
            // Limpa o intervalo quando o componente é desmontado
            clearInterval(intervalId);
        };
    }, []);

    const handleSendMessage = async () => {
        const response = await salvarMesagem(message, dados[0].relacionamentoID, dados[0].ID)
        console.log(response)
        const responseBusca = await buscarMensagem(dados[0].relacionamentoID);
        console.log(responseBusca)
        setMensagens(responseBusca)
        setMessage('')
    };

    return (
        <section>
            <Header />
            <Container className="chat-container">
                <Row className="chat-row mt-5">
                    <Col sm={4}>
                        <div className="conversation-list">
                            <ListGroup>
                                {conversations.map((conv) => (
                                    <ListGroup.Item
                                        key={conv.id}
                                        action
                                        onClick={() => setSelectedConversation(conv)}
                                        active={selectedConversation && selectedConversation.id === conv.id}
                                    >
                                        {conv.name}
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        </div>
                    </Col>
                    <Col sm={8}>
                        {selectedConversation ? (
                            <>
                                <div className="chat-history">
                                    {selectedConversation.messages.map((chat, index) => (
                                        <Card key={index} className={`chat-message ${chat.sentByUser ? 'user' : 'bot'}`}>
                                            <Card.Body>{chat.text}</Card.Body>
                                        </Card>
                                    ))}
                                </div>
                                <div className="chat-input mb-5">

                                    <Form onSubmit={(e) => { e.preventDefault(); handleSendMessage(); }}>
                                        <div className="row">
                                            <div className="col-11">
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Digite sua mensagem..."
                                                    value={message}
                                                    onChange={(e) => setMessage(e.target.value)}
                                                />
                                            </div>
                                            <div className="col-1">
                                                <Button type="submit">Enviar</Button>
                                            </div>
                                        </div>
                                    </Form>
                                    {mensagens.map((item, index) => (
                                        <div key={index} className={dados[0].ID === item.userID ? 'divMsg' : 'divMsg2'}>{item.mensagem}</div>
                                    ))}

                                </div>
                            </>
                        ) : (
                            <div className="no-conversation">Selecione uma conversa à esquerda</div>
                        )}
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Chat;
