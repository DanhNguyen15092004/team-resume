import React from 'react';
import './Skills.css';

const Skills = () => {

  return (
    <div className="skills">
      <h1>technical skills</h1>
      <hr className='hr-skills' />
      <div className="rank">
        <hr /><hr /><hr /><hr />
      </div>
      <div className="skill-bar-container">
        <div className="skill-bar">
          <h2>HTML5</h2>
          <div className="input-color">
            <input type="text" className='full' />
          </div>
          <h2>CSS3</h2>
          <div className="input-color">
            <input type="text" className='full' />
          </div>
          <h2>JavaScript</h2>
          <div className="input-color">
            <input type="text" className='full' />
          </div>
          <h2>jQuery</h2>
          <div className="input-color">
            <input type="text" className='full' />
          </div>
          <h2>PHP</h2>
          <div className="input-color">
            <input type="text" className='full' />
          </div>
          <h2>SQL</h2>
          <div className="input-color">
            <input type="text" className='full' />
          </div>
          <div className='skill-bar-percent'>
            <h2>Adobe Creative Suite</h2>
            <div className="input-color">
              <input type="text" className='percent' />
            </div>
            <h2>WordPress</h2>
            <div className="input-color">
              <input type="text" className='percent' />
            </div>
            <h2>XML</h2>
            <div className="input-color">
              <input type="text" className='percent' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
