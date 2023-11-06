import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import Header from '../Header';
import './style.css';

function Politica() {
    const [content, setContent] = useState(`
  
  Última atualização: 02/06/2023 

  Esta Política de Privacidade descreve como a nossa plataforma de mentoria ("nós", "nosso", ou
  "plataforma") coleta,
  usa, armazena e protege as informações pessoais dos usuários ("você" ou "seu") ao utilizar nossos
  serviços de
  mentoria. A sua privacidade é de extrema importância para nós, e nos esforçamos para proteger as
  informações
  pessoais que você compartilha conosco. Por favor, leia atentamente esta política antes de utilizar
  nossa
  plataforma.

  Informações Coletadas
  1.1. Informações Pessoais: Podemos coletar informações pessoais, tais como nome, endereço de e-mail,
  número de
  telefone, informações de pagamento e outras informações que você fornecer voluntariamente ao se
  cadastrar na
  plataforma, preencher formulários ou entrar em contato conosco.

  1.2. Informações de Uso: Podemos coletar informações sobre o seu uso da plataforma, como dados de
  acesso,
  atividades, interações, preferências e outras informações relacionadas ao uso dos nossos
  serviços.

  1.3. Cookies e Tecnologias Semelhantes: Podemos utilizar cookies e outras tecnologias de
  rastreamento
  para coletar
  informações sobre a sua interação com a plataforma. Essas informações são utilizadas para melhorar a
  sua
  experiência
  de uso e personalizar o conteúdo oferecido.
  `);

    const handleSave = () => {
        // Lógica para salvar o conteúdo (pode enviar para um servidor, salvar no local, etc.)
        console.log('Conteúdo salvo:', content);
    };

    return (
        <section>
            <Header />
            <Container className="editable-page-container">
                <h1>Política de Privacidade</h1>
                <Form>
                    <Form.Group controlId="content">
                        <Form.Control
                            as="textarea"
                            rows={40}
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                        />
                    </Form.Group>
                    <Button variant="primary" onClick={handleSave}>
                        Editar
                    </Button>
                    <Button variant="primary" onClick={handleSave} style={{ margin: '10px' }}>
                        Salvar
                    </Button>
                </Form>
            </Container>
        </section>
    );
}

export default Politica;
