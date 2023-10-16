import React from 'react';
import './index.css';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login/index.jsx';
import HomePage from './components/HomePage/index.jsx';
import Inscricao from './components/Inscricao/index.jsx';
import Cadastro from './components/Cadastro/index.jsx';

const root = createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/inscricao" element={<Inscricao />} />
      <Route path="/cadastro" element={<Cadastro />} />
    </Routes>
  </Router>
);
