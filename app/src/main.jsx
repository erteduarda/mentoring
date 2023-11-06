import React from 'react';
import './index.css';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login/index.jsx';
import HomePage from './components/HomePage/index.jsx';
import Inscricao from './components/Inscricao/index.jsx';
import Cadastro from './components/Cadastro/index.jsx';
import Agenda from './components/Agenda';
import Sessao from './components/Sessao';
import SessaoEspecifica from './components/SessaoEspecifica';
import Administrador from './components/Administrador';
import GerenciarInscricao from './components/GerenciarInscricao';
import Chat from './components/Chat/index.jsx';
import Politica from './components/Politica/index.jsx';
import Manual from './components/Manual/index.jsx';
import Material from './components/Material/index.jsx';

const root = createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/inscricao" element={<Inscricao />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/agenda" element={<Agenda />} />
      <Route path="/sessao" element={<Sessao />} />
      <Route path="/sessaoespecifica/:id" element={<SessaoEspecifica />} />
      <Route path="/administrador" element={<Administrador />} />
      <Route path="/acompanharinscricao" element={<GerenciarInscricao />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/politicas" element={<Politica />} />
      <Route path="/manual" element={<Manual />} />
      <Route path="/material" element={<Material />} />
    </Routes>
  </Router>
);
