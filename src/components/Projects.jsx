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
  
  title: "ToggleNest",
  description: "Worked on backend development and frontend integration using the MERN stack, focusing on API development, database connectivity, and secure authentication.",
  tech: ["MongoDB", "Express.js", "Node.js",   "JWT", "Mongoose"],
  gradient: "gradient-2",
  features: [
    "Backend API Development using Express and Node.js",
    "MongoDB database design and integration using Mongoose",
    "Authentication and authorization using JWT",
    "Frontend and backend integration through REST APIs"
  ]
},

{
  title: "Natural Language Prompt to SQL Query Generator",
  description: "Developed an AI-powered Text-to-SQL chatbot that converts natural language prompts into SQL queries, executes database operations, and generates actionable insights through statistical analysis, exploratory data analysis, and interactive visualizations.",
  tech: [
    "Python",
    "LLMs",
    "SQL",
    "NLP",
    "Pandas",
    "EDA",
    "Machine Learning",
    "Data Visualization"
  ],
  gradient: "gradient-2",
  features: [
    "Natural Language to SQL: Converts user prompts into SQL queries using Large Language Models, enabling users to interact with databases without writing SQL manually.",
    "Database Query Execution: Executes generated SQL queries to retrieve relevant data and supports structured data analysis.",
    "Exploratory Data Analysis: Performs EDA and statistical analysis on query results to identify patterns, trends, and meaningful insights.",
    "Interactive Visualizations: Generates visual representations of query results through charts and graphs for easier interpretation.",
    "Query Performance Evaluation: Evaluates model performance using metrics such as F1-score and recall, where applicable.",
    "Prediction Error Analysis: Uses MSE and RMSE where applicable to evaluate numerical prediction tasks."
  ]
}


    ],
   personal: [
  {
    title: "AI Interview Prep & Resume Analytics Platform",
    description:
      "A full-stack AI interview platform with a responsive dashboard for mock interviews, Generative AI-powered question generation and performance feedback, and a server-side resume engine for generating professionally styled PDF resumes.",
    tech: [
      "React",
      "Node.js",
      "Express.js",
      "Generative AI",
      "LLMs",
      "SCSS",
      "PDF Generation"
    ],
    gradient: "gradient-3"
  },
  {
    title: "Natural Language Prompt to SQL Query Generator",
    description:
      "An AI-powered Text-to-SQL chatbot that converts natural language prompts into SQL queries for enterprise databases and generates insights from query results using statistical analysis, EDA, and interactive visualizations.",
    tech: [
      "Python",
      "LLMs",
      "SQL",
      "NLP",
      "EDA",
      "Machine Learning",
      "F1-Score",
      "Recall",
      "MSE",
      "RMSE"
    ],
    gradient: "gradient-2"
  },
  {
    title: "Online Appointment Booking System",
    description:
      "A MERN-based appointment booking platform with role-based authentication, user and admin dashboards, appointment scheduling, cancellation, email notifications, and integrated video calling.",
    tech: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "WebRTC",
      "JWT",
      "REST APIs"
    ],
    gradient: "gradient-3"
  },
  {
    title: "Medical Query Assistant System",
    description:
      "A LangChain-based RAG system that retrieves disease, symptom, and treatment information from PDF documents and generates context-aware responses using the Gemini LLM.",
    tech: [
      "Python",
      "LangChain",
      "RAG",
      "Gemini",
      "LLM",
      "NLP",
      "PDF Processing"
    ],
    gradient: "gradient-2"
  },
  {
    title: "Streamify",
    description:
      "A production-grade language exchange platform featuring real-time chat with message threads, 4K video conferencing with screen sharing, and a dynamic multi-theme UI system.",
    tech: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Stream SDK",
      "Cloudinary",
      "Tailwind CSS"
    ],
    gradient: "gradient-3"
  },
  {
  title: "ApplyPilot — AI Job Application Automation",
  description:
    "An AI-powered job outreach platform that discovers relevant companies and recruiter contacts, validates email deliverability, automates personalized application emails, and classifies recruiter responses into actionable leads.",
  tech: [
    "Node.js",
    "Express.js",
    "LLM Agents",
    "NLP Classification",
    "REST APIs",
    "Email Automation",
    "IMAP",
    "DNS Validation"
  ],
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
            onClick={() => { setActiveCategory('personal'); setActiveProject(0); }}
          >
            Personal Projects
          </button>
          <button 
            className={`tab-btn ${activeCategory === 'internship' ? 'active' : ''}`}
            onClick={() => { setActiveCategory('internship'); setActiveProject(0); }}
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