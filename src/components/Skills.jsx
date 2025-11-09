import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Java", "JavaScript", "Python", "C", "SQL"]
    },
    {
      title: "Frameworks & Libraries",
      skills: ["React.js", "Node.js", "Express.js", "Flask", "Pandas", "Matplotlib", "Scikit-learn"]
    },
    {
      title: "Tools & Technologies", 
      skills: ["VS Code", "IntelliJ IDEA", "PyCharm", "Git", "GitHub", "MongoDB", "MySQL"]
    },
    {
      title: "Knowledge  ",
      skills: ["Web Development", "Machine Learning", "Natural Language Processing", "Data Structures Algorithms", "Responsive Design", "REST APIs","HTML5", "CSS3"]
    },
    {
      title: "Soft Skills",
      skills: ["Leadership", "Event Management", "Writing", "Public Speaking", "Time Management", "Teamwork"]
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