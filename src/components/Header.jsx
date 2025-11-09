import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [text, setText] = useState('');
  const fullText = "Ketan DilipKumar Tiwari";
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 150);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header id="home" className="header">
      <div className="header-content">
        <h1 className="sexy-main-text">
          <span className="text-gradient">{text}</span>
          <span className="cursor">|</span>
        </h1>
        <p className="sexy-tagline">
          Full-Stack Developer | ML & AI Enthusiast | Passionate About Growth
        </p>
        <div className="header-buttons">
          <button className="sexy-btn primary" onClick={() => scrollToSection('projects')}>
            View My Work
          </button>
          <button className="sexy-btn secondary" onClick={() => scrollToSection('contact')}>
            Let's Connect
          </button>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="scroll-arrow"></div>
      </div>
    </header>
  );
};

export default Header;