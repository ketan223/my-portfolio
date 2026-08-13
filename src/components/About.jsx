import React from 'react';
import './About.css';
import ketan_pic from '../assets/ketan.jpeg';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">
          About <span className="accent-text">Me</span>
        </h2>
        <div className="about-content">
          <div className="about-text">
            <p className="lead-text">
              Hi! I'm <span className="highlight">Ketan Tiwari</span>, a developer with a strong interest in full-stack development and machine learning. I enjoy creating solutions that make a difference.
            </p>
            <p className="description-text">
I'm a Full-Stack Developer with a strong interest in ML, DL, and Gen AI. I enjoy building practical, innovative projects that solve real-world problems while continuously learning and growing my skills.            </p>
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-number">10+</div>
                <div className="stat-label">Projects Built</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">2</div>
                <div className="stat-label">Internships </div>
              </div>
              <div className="stat-item">
                <div className="stat-number">∞</div>
                <div className="stat-label">Passion for Learning</div>
              </div>
            </div>
          </div>
          <div className="about-image">
            <div className="image-placeholder">
              <img 
                src={ketan_pic} 
                alt="Ketan" 
                className="profile-photo"
              />
              <div className="pulse-ring"></div>
              <div className="glow-effect"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;