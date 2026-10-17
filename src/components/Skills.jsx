import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Python", "Java", "JavaScript", "C", "SQL"]
  },
  {
    title: "AI & Machine Learning",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "Generative AI",
      "Large Language Models (LLMs)",
      "Agentic Ai        ",
      "Retrieval-Augmented Generation (RAG)",
      "Natural Language Processing (NLP)"
    ]
  },
  {
    title: "Software Development",
    skills: [
      "Full-Stack Development",
      "MERN Stack",
      "Backend Development",
      "REST APIs",
      "FastAPI",
      "Object-Oriented Programming (OOP)",
      "Data Structures & Algorithms (DSA)"
    ]
  },
  {
    title: "Tools & Platforms",
    skills: [
      "Git",
      "GitHub",
      "Visual Studio Code",
      "Jupyter Notebook",
      "Docker",
      "MongoDB",
      "MySQL",
      "PostgreSQL"
    ]
  },
  {
    title: "Professional Skills",
    skills: [
      "Problem Solving",
      "Analytical Thinking",
      "Communication",
      "Team Collaboration",
      "Leadership",
      "Time Management"
    ]
  }
];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">
          My <span className="accent-text">Skills</span>
        </h2>
        <div className="skills-categories">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;