import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function Home() {
  const navigate = useNavigate();

  return (
    <section className="bg-pink-800 rounded-2xl shadow-xl max-w-xl mx-auto my-8 px-8 py-12 flex flex-col items-center gap-6">
      <h1 className="text-4xl md:text-5xl font-extrabold text-graydark tracking-tight mb-2">¡Hola! Soy Roger Reyes</h1>
      <p className="text-lg text-white leading-relaxed text-center">Desarrollador Fullstack y emprendedor digital enfocado en crear soluciones innovadoras con tecnología.</p>
      <p className="text-lg text-white leading-relaxed text-center">Especializado en desarrollo web, automatización y aplicaciones SaaS. Me encanta construir, aprender y compartir lo que sé.</p>
      <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full justify-center">
        <button onClick={() => navigate('/projects')} className="bg-graydark text-white font-semibold rounded-lg px-6 py-2 shadow hover:bg-graydark hover:text-white border border-graydark transition-colors duration-200 w-full sm:w-auto">Ver mis proyectos</button>
        <button onClick={() => navigate('/contact')} className="bg-white text-pink-800 font-semibold rounded-lg px-6 py-2 shadow border border-pink-800 hover:bg-pink-800 hover:text-white transition-colors duration-200 w-full sm:w-auto">Contáctame</button>
      </div>
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
