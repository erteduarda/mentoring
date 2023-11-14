import React, { useState } from 'react';
import './style.css'; // Substitua pelo caminho correto do seu CSS
import { Form, Button, Container, Row, Col, ListGroup, Card } from 'react-bootstrap';
import Header from '../Header';

function Manual() {
    const cor = [
        '#FFD700',
        '#FFA500',
        '#FF4500',
        '#8B0000',
        '#C71585',
        '#8B008B',
        '#87CEFA',
        '#4682B4',
        '#000080',
        '#48D1CC',
    ];

    const [instrucoes, setInstrucoes] = useState([
        { descricao: 'Todas as sessões tem uma importância particular... mas essa é a primeira. Use esse tempo para se apresentar, uma dica é trazer curiosidades da carreira, projetos e planos. Lembre-se o Mentory é um Projeto para um pequeno grupo, aproveite cada sessão que está por vir. E não esqueça de se preparar para a segunda sessão, colha informações, se organize...' },
        { descricao: 'Dando andamento a aplicação da metodologia, esse momento é importante para fortalecer os vínculos, estruturar o plano de trabalho, criar os focos. Não se esqueça, cumprir a agenda é um ponto importante para o sucesso do Mentory.' },
        { descricao: 'Essa sessão é importantíssima para gerar provocações, pois quando olhamos para as oportunidades com um filtro focado em mudanças e melhorias muitas ideias surgem.' },
        { descricao: 'É hora de se planejar, começar a gerar seus planos de ação, coletar informações. Como tem sidos as agendas? Você tem conseguido priorizar as sessões?' },
        { descricao: 'O que te desafia? Como você tem organizado suas prioridades? Sua vida pessoal tem dado suporte para você realizar aqui no trabalho? Essas são perguntas importantes para que sua energia realizadora esteja em alta.' },
        { descricao: 'Como estão suas ações? Essa sessão é focal... hoje é importante entender a necessidade de redefinir a rota ou manter o caminho.' },
        { descricao: 'Energia total. Próximo do final é o momento crucial para começar a focar na acabativa. O que tem sido muito bom? O que pode ser melhor?' },
        { descricao: 'Estamos quando lá. Falta pouco para finalizarmos o Projeto. Claro que muitos pontos surgiram, e com toda certeza você já viu diversas ferramentas e metodologias que te deram e darão suporte para você continuar solucionando situações e criando oportunidades onde só se vê problema.' },
        { descricao: 'Estamos chegando ao fim. Essa sessão é muito especial, uma dica é usufrui desse momento com muita gratidão. Como foi o projeto pra você? O que mais tem contribuído para o seu crescimento? A próxima sessão será a última, mas o processo de desenvolvimento não termina por aqui.' },
        { descricao: 'Terminamos, como é bom finalizar um ciclo. Quais as lições aprendidas? O que você mais gostou? Está pronto para a Formatura?' },
    ]);

    const inserir = () => {
        Swal.fire({
            text: 'Passo Atualizado!',
        });
    };

    const handleDescricaoChange = (index, value) => {
        const newInstrucoes = [...instrucoes];
        newInstrucoes[index].descricao = value;
        setInstrucoes(newInstrucoes);
    };

    const salvarInstrucao = (index) => {
        // Lógica para salvar a instrução
        inserir();
    };

    return (
        <section>
            <Header></Header>
            <Container>
                <div className="row">
                    {instrucoes.map((p, index) => (
                        <div className="col-12" key={index}>
                            <div className="card" style={{ margin: '10px' }}>
                                <div className="card-header flex-column align-items-start pb-0">
                                    <h2 className="fw-bolder mt-1" style={{ color: cor[index] }}>
                                        Passo {index + 1}
                                    </h2>
                                </div>
                                <Form>
                                    <div id="line-area-chart-1" style={{ padding: '15px' }}>
                                        {sessionStorage.getItem('permissao_logada') == 1 ? (
                                            <>
                                                <Form.Control
                                                    as="textarea"
                                                    rows="3"
                                                    name="descricao"
                                                    value={p.descricao}
                                                    onChange={(e) => handleDescricaoChange(index, e.target.value)}
                                                />
                                                <div className="row mt-2">
                                                    <div className="col-sm-4">
                                                        <Button
                                                            className="btn btn-primary mb-1"
                                                            style={{ background: '#adb5bd', border: 'none' }}
                                                            onClick={() => salvarInstrucao(index)}
                                                        >
                                                            Gravar
                                                        </Button>
                                                    </div>
                                                </div>
                                            </>
                                        ) : (
                                            <p>{p.descricao}</p>
                                        )}
                                    </div>
                                </Form>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}

export default Manual;
