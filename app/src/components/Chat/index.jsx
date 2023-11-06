import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, ListGroup, Card } from 'react-bootstrap';
import Header from '../Header';
import './style.css';

function Chat() {
    const [message, setMessage] = useState('');
    const [chatHistory, setChatHistory] = useState([]);
    const [selectedConversation, setSelectedConversation] = useState(null);

    const conversations = [
        { id: 1, name: 'Conversa 1', messages: [] },
        { id: 2, name: 'Conversa 2', messages: [] },
        // Adicione mais conversas conforme necessário
    ];

    const handleSendMessage = () => {
        if (message.trim() !== '') {
            const newMessage = { text: message, sentByUser: true };
            setChatHistory([...chatHistory, newMessage]);

            // Adicione a mensagem à conversa selecionada
            if (selectedConversation) {
                const updatedConversations = conversations.map((conv) =>
                    conv.id === selectedConversation.id
                        ? { ...conv, messages: [...conv.messages, newMessage] }
                        : conv
                );
                setConversations(updatedConversations);
            }

            setMessage('');
        }
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
                                <div className="chat-input">
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
