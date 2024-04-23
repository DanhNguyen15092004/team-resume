import React from 'react';
import './Skills.css';
import { Col } from 'react-bootstrap';

const Skills = () => {
  return (
    <Col className="skills" sm={12}>
      <h1 className='text'>technical skills</h1>
      <hr className='hr-skills' />
      <div className="skill-bar-container">
        <div className="skill-bar">
          <h2 className='text' >HTML5</h2>
          <div className="input-color">
            <input type="text" className='full' />
          </div>
          <h2 className='text'>CSS3</h2>
          <div className="input-color">
            <input type="text" className='full' />
          </div>
          <h2 className='text'>JavaScript</h2>
          <div className="input-color">
            <input type="text" className='full' />
          </div>
          <h2 className='text'>.Net</h2>
          <div className="input-color">
            <input type="text" className='full' />
          </div>
          <h2 className='text'>PHP</h2>
          <div className="input-color">
            <input type="text" className='full' />
          </div>
          <h2 className='text'>SQL</h2>
          <div className="input-color">
            <input type="text" className='full' />
          </div>
          <div className='skill-bar-percent'>
            <h2 className='text'>SSMS</h2>
            <div className="input-color">
              <input type="text" className='percent' />
            </div>
            <h2 className='text'>React</h2>
            <div className="input-color">
              <input type="text" className='percent' />
            </div>
            <h2 className='text'>XML</h2>
            <div className="input-color">
              <input type="text" className='percent' />
            </div>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default Skills;
