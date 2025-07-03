import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

import './App.css';

function Home() {
  return (
    <section className="home">
      <h1>¡Hola! Soy Roger Reyes</h1>
      <p>Desarrollador Fullstack y emprendedor digital enfocado en crear soluciones innovadoras con tecnología.</p>
      <p>Especializado en desarrollo web, automatización y aplicaciones SaaS. Me encanta construir, aprender y compartir lo que sé.</p>
      <button onClick={() => navigate('/projects')}>Ver mis proyectos</button>
      <button onClick={() => navigate('/contact')}>Contáctame</button>

    </section>
  );
}

function App() {
  return (
    <Router>
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
