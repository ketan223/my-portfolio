import React, { useState } from 'react';  // ← Add useState
import './Internships.css';
import ONGCCertificate from '../assets/ONGC.png';
import backend from '../assets/download.png';

const Internships = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);  // ← Add state

  let internships = [
    {
      company: "ONGC",
      role: "Web Development Intern",
      duration: "May 2025 - July 2025", 
      description: "Building responsive web applications at ONGC.",
      skills: ["Js", "PHP", "MySQL", "XAMPP"],
      certificate: ONGCCertificate
    },
    {
    company: "Sapphire Infocom Pvt Ltd",
      role: "Backend Developer ", 
      duration: "Sep 2025 - Dec 2025",
      description: "Building secure and scalable backend systems with modern technologies.",
    skills: ["Express.js", "MongoDB", "REST APIs", "Middleware"],
      certificate: backend // ← Your second certificate
    }
  ];
  

  const openCertificate = (certificate) => {
    setSelectedCertificate(certificate);
  };

  const closeCertificate = () => {
    setSelectedCertificate(null);
  };

  return (
    <section id="internships" className="internships-section">
      <div className="container">
        <h2 className="section-title">
          My <span className="accent-text">Internships</span>
        </h2>
        <div className="internships-grid">
          {internships.map((internship, index) => (
            <div key={index} className="internship-card">
              <div className="internship-image">
                <img 
                  src={internship.certificate} 
                  alt={`${internship.company} Internship Certificate`}
                  className="internship-img"
                />
                <div 
                  className="internship-overlay"
                  onClick={() => openCertificate(internship.certificate)}  // ← Add click handler
                >
                  <span className="view-internship">View Certificate</span>
                </div>
              </div>
              <div className="internship-content">
                <div className="internship-header">
                  <h3 className="company-name">{internship.company}</h3>
                  <span className="internship-duration">{internship.duration}</span>
                </div>
                <h4 className="internship-role">{internship.role}</h4>
                <p className="internship-description">{internship.description}</p>
                <div className="internship-skills">
                  {internship.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certificate Modal */}
      {selectedCertificate && (
        <div className="certificate-modal" onClick={closeCertificate}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={closeCertificate}>×</span>
            <img 
              src={selectedCertificate} 
              alt="Certificate Full View" 
              className="certificate-full-image"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Internships;