import React, { useState } from 'react';
import './Certificates.css';
import Java from '../assets/JAVA.jpg';
import C from '../assets/C.jpg';
import mern from '../assets/MERN.png';
import ml from '../assets/ML.png';

const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const certificates = [
    {
      title: "Java Programming",
   
      date: "2024",
      description: "Certified in Java programming fundamentals and advanced concepts",
      skills: ["Java", "OOP", "Data Structures", "Algorithms"],
      image: Java
    },
    {
  title: "MERN Stack",
  date: "2025",
  description: "Certified in full-stack web development using MongoDB, Express, React, and Node.js",
  skills: ["MongoDB", "Express.js", "React.js", "Node.js", "REST API", "JWT", "Mongoose"],
  image: mern
},
{
  title: "Machine Learning",
  date: "2026",
  description: "Certified in machine learning concepts including data preprocessing, model building, and evaluation",
  skills: ["Python", "Pandas", "Scikit-learn", "Data Preprocessing", "Model Training"],
  image: ml
}

  ];

  const openCertificate = (certificate) => {
    setSelectedCertificate(certificate);
  };

  const closeCertificate = () => {
    setSelectedCertificate(null);
  };

  return (
    <section id="certificates" className="certificates-section">
      <div className="container">
        <h2 className="section-title">
          My <span className="accent-text">Certificates</span>
        </h2>
        <div className="certificates-grid">
          {certificates.map((cert, index) => (
            <div key={index} className="certificate-card">
              <div className="certificate-image">
                <img 
                  src={cert.image} 
                  alt={`${cert.title} Certificate`}
                  className="certificate-img"
                />
                <div 
                  className="image-overlay"
                  onClick={() => openCertificate(cert.image)}
                >
                  <span className="view-certificate">View Certificate</span>
                </div>
              </div>
              <div className="certificate-content">
                <h3 className="certificate-title">{cert.title}</h3>
                <p className="certificate-issuer">{cert.issuer}</p>
                <span className="certificate-date">{cert.date}</span>
                <p className="certificate-description">{cert.description}</p>
                <div className="certificate-skills">
                  {cert.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill-badge">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certificate Modal - Same as Internships */}
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

export default Certificates;