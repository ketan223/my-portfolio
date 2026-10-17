import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Internships from './components/Internships';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';

const sectionIds = ['home', 'about', 'skills', 'internships', 'projects', 'certificates', 'contact'];

const getSectionFromHash = () => {
  const sectionId = window.location.hash.slice(1);
  return sectionIds.includes(sectionId) ? sectionId : 'home';
};

const App = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeSection, setActiveSection] = useState(getSectionFromHash);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    let animationFrameId;

    const updateActiveSection = () => {
      animationFrameId = undefined;

      const navbarHeight = document.querySelector('.navbar')?.getBoundingClientRect().height ?? 0;
      const activationPoint = window.scrollY + navbarHeight + 1;
      let currentSection = sectionIds[0];

      for (const sectionId of sectionIds) {
        const section = document.getElementById(sectionId);
        if (section && section.getBoundingClientRect().top + window.scrollY <= activationPoint) {
          currentSection = sectionId;
        }
      }

      const isAtPageBottom =
        window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 1;
      if (isAtPageBottom) {
        currentSection = sectionIds[sectionIds.length - 1];
      }

      setActiveSection((previousSection) =>
        previousSection === currentSection ? previousSection : currentSection
      );
    };

    const scheduleActiveSectionUpdate = () => {
      if (animationFrameId === undefined) {
        animationFrameId = window.requestAnimationFrame(updateActiveSection);
      }
    };

    const handleHashChange = () => {
      setActiveSection(getSectionFromHash());
      scheduleActiveSectionUpdate();
    };

    window.addEventListener('scroll', scheduleActiveSectionUpdate, { passive: true });
    window.addEventListener('resize', scheduleActiveSectionUpdate);
    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('popstate', handleHashChange);
    scheduleActiveSectionUpdate();

    return () => {
      window.removeEventListener('scroll', scheduleActiveSectionUpdate);
      window.removeEventListener('resize', scheduleActiveSectionUpdate);
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('popstate', handleHashChange);
      if (animationFrameId !== undefined) {
        window.cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setMenuOpen(false);
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
          
          <button className={`menu-toggle ${menuOpen ? 'active' : ''}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle Navigation Menu">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>

          <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
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