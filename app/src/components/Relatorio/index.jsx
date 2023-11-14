import React, { useEffect, useState } from 'react';
import * as XLSX from 'xlsx';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import Header from '../Header';
import "./style.css";
import { buscarRelatorio } from '../../service/relatorio';
import { buscarUsuario } from '../../service/usuarioService';

function Relatorio() {

    const [relatorio, setRelatorio] = useState([]);
    const [usuarios, setUsuarios] = useState([]);
    const [selectedUserId, setSelectedUserId] = useState(""); // Estado para armazenar o ID selecionado

    useEffect(() => {
        const fetchData = async () => {
            try {
                const responseBusca = await buscarUsuario();
                setUsuarios(responseBusca);
                console.log(responseBusca);
            } catch (error) {
                console.error('Erro na requisição:', error);
            }
        };

        fetchData();
    }, []);

    const buscaRelatorio = async (e) => {
        e.preventDefault();
        // Aqui você pode fazer algo com os dados, como enviá-los para um servidor
        console.log('ID selecionado:', selectedUserId);

        const response = await buscarRelatorio(selectedUserId);
        setRelatorio(response)
        console.log(response);
    }

    function formatarDataParaString(data) {
        const ano = data.getFullYear();
        const mes = String(data.getMonth() + 1).padStart(2, '0'); // O mês começa do zero
        const dia = String(data.getDate()).padStart(2, '0');

        return `${dia}/${mes}/${ano}`;
    }

    function exportToExcel(data) {
        const ws = XLSX.utils.json_to_sheet(data);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Relatorio');
        XLSX.writeFile(wb, 'relatorio.xlsx');
    }

    return (
        <section>
            <Header />
            <Container>
                <Row className='mt-5'>
                    <Col>
                        <Form.Select
                            aria-label="Default select example"
                            value={selectedUserId} // Valor selecionado
                            onChange={(e) => setSelectedUserId(e.target.value)} // Atualiza o estado quando a seleção muda
                        >
                            <option></option>
                            {usuarios.map((item) => (
                                item.Papel !== "Admin" && (
                                    <option key={item.ID} value={item.ID}>
                                        {`${item.Nome} - ${item.Papel}`}
                                    </option>
                                )
                            ))}
                        </Form.Select>
                    </Col>
                    <Col>
                        <Button variant="primary" onClick={buscaRelatorio}>Buscar</Button>{' '}
                    </Col>
                    <Col>
                        <Button variant="success" onClick={() => exportToExcel(relatorio)}>Exportar para Excel</Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Table striped bordered hover className='mt-5'>
                            <thead>
                                <tr>
                                    <th>Sessão</th>
                                    <th>Data</th>
                                    <th>Hora</th>
                                    <th>Local</th>
                                    <th>Mentor</th>
                                    <th>Relato Mentor</th>
                                    <th>Mentorado</th>
                                    <th>Relato Mentorado</th>
                                </tr>
                            </thead>
                            <tbody>
                                {relatorio.map((item) => (
                                    <tr>
                                        <td>{item.NumeroSessao}</td>
                                        <td>{formatarDataParaString(new Date(item.Data))}</td>
                                        <td>{item.Hora}</td>
                                        <td>{item.Local}</td>
                                        <td>{item.NomeMentor}</td>
                                        <td>{item.RelatoMentor}</td>
                                        <td>{item.NomeMentorado}</td>
                                        <td>{item.RelatoMentorado}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Relatorio;
