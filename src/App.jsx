import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaArrowRight, FaCode, FaRocket, FaLightbulb } from 'react-icons/fa';

import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const Home = () => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Calculate background gradient position based on mouse position
  const gradientX = (mousePosition.x / window.innerWidth) * 100;
  const gradientY = (mousePosition.y / window.innerHeight) * 100;

  // Parallax effect for the floating elements
  const parallaxX = (mousePosition.x / window.innerWidth) * 20 - 10;
  const parallaxY = (mousePosition.y / window.innerHeight) * 20 - 10;

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated background gradient */}
      <div 
        className="absolute inset-0 -z-10 transition-opacity duration-1000"
        style={{
          background: `radial-gradient(circle at ${gradientX}% ${gradientY}%, rgba(190, 24, 93, 0.15) 0%, rgba(0, 0, 0, 0) 50%)`,
        }}
      />

      {/* Floating elements */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-16 h-16 bg-pink-600/20 rounded-full blur-xl -z-10"
        animate={{
          x: [0, 15, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
      />
      <motion.div 
        className="absolute top-1/3 right-1/4 w-24 h-24 bg-amber-400/15 rounded-full blur-xl -z-10"
        animate={{
          x: [0, -20, 0],
          y: [0, 15, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
          delay: 1
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-3 py-1 text-sm font-medium bg-pink-900/50 text-pink-300 rounded-full mb-4 border border-pink-800/50">
              Desarrollador Fullstack
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Hola, soy <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-amber-300">Roger Reyes</span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-300 max-w-3xl mx-auto mb-10 leading-relaxed">
              Construyo experiencias digitales excepcionales con tecnologías modernas y un toque de creatividad.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-6 justify-center mb-20"
          >
            <button 
              onClick={() => navigate('/projects')} 
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="group relative overflow-hidden px-8 py-4 bg-gradient-to-r from-pink-700 to-pink-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-pink-500/20 transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2"
            >
              <span>Explorar Proyectos</span>
              <motion.span
                animate={{ x: isHovered ? 5 : 0 }}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              >
                <FaArrowRight />
              </motion.span>
              <span className="absolute inset-0 bg-gradient-to-r from-amber-400 to-pink-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
            </button>
            
            <button 
              onClick={() => navigate('/contact')} 
              className="px-8 py-4 bg-transparent text-white font-semibold rounded-xl border-2 border-pink-600 hover:bg-pink-900/30 transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2 group"
            >
              <span>Contáctame</span>
              <FaEnvelope className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          {/* Features */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-24"
          >
            {[
              {
                icon: <FaCode className="text-3xl text-pink-400" />,
                title: 'Desarrollo Web',
                description: 'Aplicaciones modernas y responsivas con React, Next.js y tecnologías de vanguardia.'
              },
              {
                icon: <FaRocket className="text-3xl text-amber-400" />,
                title: 'Automatización',
                description: 'Soluciones personalizadas para optimizar y automatizar tus procesos de negocio.'
              },
              {
                icon: <FaLightbulb className="text-3xl text-pink-300" />,
                title: 'Innovación',
                description: 'Enfoque creativo para resolver problemas complejos con soluciones simples y efectivas.'
              }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -5 }}
                className="bg-zinc-900/50 backdrop-blur-sm p-6 rounded-2xl border border-zinc-800 hover:border-pink-900/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-pink-900/30 rounded-xl flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-zinc-400">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="flex justify-center gap-6 mt-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {[
              { icon: <FaGithub />, link: 'https://github.com/rogerreys', label: 'GitHub' },
              { icon: <FaLinkedin />, link: 'https://linkedin.com/in/rogerreys', label: 'LinkedIn' },
              { icon: <FaTwitter />, link: 'https://twitter.com/roger_reys', label: 'Twitter' },
              { icon: <FaEnvelope />, link: 'https://mail.google.com/mail/?view=cm&fs=1&to=roger.ry97m@gmail.com', label: 'Email' }
            ].map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-zinc-800 text-zinc-300 hover:bg-pink-900/50 hover:text-white transition-all duration-300 hover:-translate-y-1"
                aria-label={social.label}
              >
                <span className="text-xl">{social.icon}</span>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-black to-zinc-900 text-white">
      <Router>
        <Header />
        <main className="relative z-0">
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
    </div>
  );
}

export default App;
