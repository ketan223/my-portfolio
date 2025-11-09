import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('personal');
  const [activeProject, setActiveProject] = useState(0);

  const projects = {
    internship: [
      {
        title: "ONGC Digital Forms System",
        description: "Developed a comprehensive digital forms solution with secure data handling and automated storage systems.",
        tech: ["PHP", "JS", "MySQL", "HTML", "CSS", "Validation"],
        gradient: "gradient-1",
        features: [
          "Dynamic Digital Forms: Designed and developed dynamic digital forms with validation to simplify data collection and ensure correct user inputs.",
          "Secure Database Storage: Implemented secure database storage, improving data accuracy and reducing manual entry errors.",
          "Organized Data Retrieval Features: Built features for organized data retrieval, enabling easy search, filtering, and streamlined management.",
          "Automatic Data Storage: Enabled organized data retrieval; data is automatically stored in the database."
        ]
      },
     {
  title: " Sapphire MERN Stack Development", 
  description: "Backend development role focusing on the MERN stack - MongoDB, Express.js  and Node.js for full-stack applications.",
  tech: ["MongoDB", "Express.js", "Node.js", "REST APIs", "JWT", "Mongoose"],
  gradient: "gradient-2",
  features: [
    "Backend Architecture: Designing and implementing server-side logic",
    "Database Management: Working with MongoDB for data storage and retrieval",
    "API Integration: Creating endpoints for frontend communication", 
    "Security Implementation: Adding authentication and data validation layers"
  ]
}
    ],
    personal: [
      {
        title: "Virtual Banking System",
        description: "A Virtual Banking System lets users perform secure banking operations online without visiting a branch.",
        tech: ["Java", "SQL", "MySQL Driver", "XAMPP"],
        gradient: "gradient-2"
      },
      {
        title: "StreamBackend", 
        description: "Developed a secure backend for a YouTube-like platform with user authentication, video management, and interactive features.",
        tech: ["Node.js", "Express.js", "MongoDB", "JWT", "REST APIs"],
        gradient: "gradient-3"
      },
      {
        title: "MERN Auth System",
        description: "A complete authentication system with login, registration, and secure user sessions.",
        tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
        gradient: "gradient-1"
      }
    ]
  };

  const currentProjects = projects[activeCategory];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">
          My <span className="accent-text">Creations</span>
        </h2>
        
        {/* Category Tabs */}
        <div className="projects-tabs">
          <button 
            className={`tab-btn ${activeCategory === 'personal' ? 'active' : ''}`}
            onClick={() => setActiveCategory('personal')}
          >
            Personal Projects
          </button>
          <button 
            className={`tab-btn ${activeCategory === 'internship' ? 'active' : ''}`}
            onClick={() => setActiveCategory('internship')}
          >
            Internship Projects
          </button>
        </div>

        <div className="projects-grid">
          {currentProjects.map((project, index) => (
            <div 
              key={index}
              className={`project-card ${activeProject === index ? 'active' : ''}`}
              onMouseEnter={() => setActiveProject(index)}
            >
              <div className={`project-gradient ${project.gradient}`}></div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                {/* Features List for Internship Project */}
                {project.features && (
                  <div className="project-features">
                    <h4>Key Contributions:</h4>
                    <ul>
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <div className="tech-stack">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
                 
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;