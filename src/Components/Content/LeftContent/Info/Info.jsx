import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobile, faEnvelope, faMapMarker, faGlobe} from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import './Info.css'

const Info = () => {
  return (
    <div className='info'>
        <div className="info-mail icon-gap custom-icon">
            <FontAwesomeIcon icon={faEnvelope} className="custom-icon"/>
            <p className="text">johnathan@novoresume.com</p>
        </div>
        <div className="info-phone icon-gap custom-icon">
            <FontAwesomeIcon icon={faMobile} className="custom-icon"/>
            <p className="text">123 6543 132</p>
        </div>
        <div className="info-address icon-gap custom-icon">
            <FontAwesomeIcon icon={faMapMarker} className="custom-icon"/>
            <p className="text">Long Beach, CA</p>
        </div>
        <div className="info-com icon-gap custom-icon">
            <FontAwesomeIcon icon={faGlobe} className="custom-icon"/>
            <p className="text">jonathan-smith.com</p>
        </div>
        <div className="info-linkedin icon-gap custom-icon">
            <FontAwesomeIcon icon={faLinkedin} className="custom-icon"/>
            <p className="text"> linkedin.com/in/jonathan.smith</p>
        </div>
        <div className="info-git icon-gap custom-icon">
            <FontAwesomeIcon icon={faGithub} className="custom-icon"/>
            <p className="text">github.com/jonathan.smith</p>
        </div>
    </div>
  )
}

export default Info
