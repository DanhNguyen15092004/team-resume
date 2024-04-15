import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobile, faEnvelope, faMapMarker, faGlobe} from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import './Info.css'

const Info = () => {
  return (
    <div className='info'>
        <div className="info-mail icon-gap">
            <FontAwesomeIcon icon={faEnvelope} className="custom-icon"/>
            <p class="infoContent">johnathan@novoresume.com</p>
        </div>
        <div className="info-phone icon-gap">
            <FontAwesomeIcon icon={faMobile} className="custom-icon"/>
            <p class="infoContent">039815904</p>
        </div>
        <div className="info-address icon-gap">
            <FontAwesomeIcon icon={faMapMarker} className="custom-icon"/>
            <p class="infoContent">Long Beach, CA</p>
        </div>
        <div className="info-com icon-gap">
            <FontAwesomeIcon icon={faGlobe} className="custom-icon"/>
            <p class="infoContent">jonathan-smith.com</p>
        </div>
        <div className="info-linkedin icon-gap">
            <FontAwesomeIcon icon={faLinkedin} className="custom-icon"/>
            <p class="infoContent">linkedin.com/in/jonathan.smith</p>
        </div>
        <div className="info-git icon-gap">
            <FontAwesomeIcon icon={faGithub} className="custom-icon"/>
            <p class="infoContent">github.com/jonathan.smith</p>
        </div>
    </div>
  )
}

export default Info
