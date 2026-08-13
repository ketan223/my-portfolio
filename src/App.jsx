import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Internships from './components/Internships';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';

const App = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="app">
      <div 
        className="cursor-glow"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`
        }}
      ></div>
      
      <div className="floating-particles">
        {[...Array(15)].map((_, i) => (
          <div key={i} className="particle" style={{
            '--i': i,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 20}s`
          }}></div>
        ))}
      </div>

      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <span className="logo-text">Ketan</span>
          </div>
          <ul className="nav-menu">
            <li className="nav-item">
              <a href="#home" className={`nav-link ${activeSection === 'home' ? 'active' : ''}`} onClick={() => scrollToSection('home')}>Home</a>
            </li>
            <li className="nav-item">
              <a href="#about" className={`nav-link ${activeSection === 'about' ? 'active' : ''}`} onClick={() => scrollToSection('about')}>About</a>
            </li>
            <li className="nav-item">
              <a href="#skills" className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`} onClick={() => scrollToSection('skills')}>Skills</a>
            </li>
            <li className="nav-item">
              <a href="#internships" className={`nav-link ${activeSection === 'internships' ? 'active' : ''}`} onClick={() => scrollToSection('internships')}>Internships</a>
            </li>
            <li className="nav-item">
              <a href="#projects" className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`} onClick={() => scrollToSection('projects')}>Projects</a>
            </li>
            <li className="nav-item">
              <a href="#certificates" className={`nav-link ${activeSection === 'certificates' ? 'active' : ''}`} onClick={() => scrollToSection('certificates')}>Certificates</a>
            </li>
            <li className="nav-item">
              <a href="#contact" className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`} onClick={() => scrollToSection('contact')}>Contact</a>
            </li>
          </ul>
        </div>
      </nav>

      <Header />
      <About />
      <Skills />
      <Internships />
      <Projects />
      <Certificates />
      <Contact />
    </div>
  );
};

export default App;