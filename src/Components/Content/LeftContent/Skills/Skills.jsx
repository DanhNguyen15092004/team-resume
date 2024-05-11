import React, { useState, useEffect } from 'react';
import './Skills.css'; // Import your CSS file
import { Col } from 'react-bootstrap';

const skillsData = [
  { name: 'HTML5', value: 80 },
  { name: 'CSS3', value: 70 },
  { name: 'JavaScript', value: 90 },
  { name: 'React', value: 75 },
  { name: 'Python', value: 60 },
  { name: 'SQL', value: 85 },
  { name: 'Node.js', value: 55 },
  { name: 'Git', value: 60 },
  { name: 'Docker', value: 70 },
  // Add more skills as needed
];

const Skills = () => {
  const [animatedSkills, setAnimatedSkills] = useState([]);

  useEffect(() => {
    animateSkills();
  }, []);

  const animateSkills = () => {
    const animationDuration = 1500; // Animation duration in milliseconds
    const animationInterval = 100; // Interval between each animation step
    const animationFrames = Math.ceil(animationDuration / animationInterval);
    skillsData.forEach((skill, index) => {
      const step = skill.value / animationFrames;
      let currentValue = 0;
      
      const intervalId = setInterval(() => {
        if (currentValue >= skill.value) {
          clearInterval(intervalId);
          return;
        }
        currentValue += step;
        setAnimatedSkills(prevState => {
          const newState = [...prevState];
          newState[index] = currentValue;
          return newState;
        });
      }, animationInterval);
    });
  };  

  return (
    <Col className="skills" sm={12}>
      <h1 className='skill-title'>TECHNICAL SKILLS</h1>  
      <div className="skill-bar">
        {skillsData.map((skill, index) => (
          <div key={index} className="skill-item">
            <h2 className="skills-name">{skill.name}</h2>
            <div className="progress-bar">
              <div
                className="progress"
                style={{ width: `${animatedSkills[index] || 0}%` }}
              >
                <span className="progress-text">{Math.round(animatedSkills[index] || 0)}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Col>
  );
};

export default Skills;
