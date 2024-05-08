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
            <h4 className="info-text">johnathan@novoresume.com</h4>
          </div>
          <div className="info-item">
            <FontAwesomeIcon icon={faMobile} className="custom-icon" />
            <h4 className="info-text">123 6543 132</h4>
          </div>
          <div className="info-item">
            <FontAwesomeIcon icon={faMapMarker} className="custom-icon" />
            <h4 className="info-text">Long Beach, CA</h4>
          </div>
          <div className="info-item">
            <FontAwesomeIcon icon={faGlobe} className="custom-icon" />
            <h4 className="info-text">jonathan-smith.com</h4>
          </div>
          <div className="info-item">
            <FontAwesomeIcon icon={faLinkedin} className="custom-icon" />
            <h4 className="info-text">linkedin.com/in/jonathan.smith</h4>
          </div>
          <div className="info-item">
            <FontAwesomeIcon icon={faGithub} className="custom-icon" />
            <h4 className="info-text">github.com/jonathan.smith</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Info;
