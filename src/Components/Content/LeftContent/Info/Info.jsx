import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobile, faEnvelope, faMapMarker, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import './Info.css';

const Info = () => {
  return (
    <div className='info' style={{ marginTop: '20px' }}>
      <div className="info-container">
        <div className="info-content">
          <div className="info-item">
            <FontAwesomeIcon icon={faEnvelope} className="custom-icon" />
            <h4 className="info-text">danh.nguyen1509.2004@gmail.com</h4>
          </div>
          <div className="info-item">
            <FontAwesomeIcon icon={faMobile} className="custom-icon" />
            <h4 className="info-text">+84 0396815904</h4>
          </div>
          <div className="info-item">
            <FontAwesomeIcon icon={faLinkedin} className="custom-icon" />
            <a href="https://www.linkedin.com/in/danh-nguy%E1%BB%85n-994a8b25b/" target="_blank" rel="noopener noreferrer" className="info-text">Linkedin</a>
        </div>
          <div className="info-item">
            <FontAwesomeIcon icon={faGithub} className="custom-icon" />
            <a href="https://github.com/DanhNguyen15092004" target="_blank" rel="noopener noreferrer" className="info-text">Github</a>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Info;
