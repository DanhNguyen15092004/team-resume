import React from "react";
import './Certificate.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faOpencart , faLinux , faUncharted } from "@fortawesome/free-brands-svg-icons";
import { Col } from "react-bootstrap";

const Certificate = () => { 
    return ( 
        <Col className="certificate-container"> 
            <h3 className="certificate-title subtitle">Certificate</h3>
            <div className="certificate-content"> 
                <div className="certificate-item">
                    <FontAwesomeIcon icon={faOpencart} className='custom-icon' />
                    <h3 className="certificate-text">IELTS Overall 6.0</h3>
                </div>
                <div className="certificate-item">
                    <FontAwesomeIcon icon={faLinux} className='custom-icon'/>
                    <h3 className="certificate-text">Certified Web Fundamental - Web Developer</h3>
                </div>
                <div className="certificate-item">
                    <FontAwesomeIcon icon={faUncharted} className='custom-icon' />
                    <h3 className="certificate-text">Software Engineering Fundamental Certification</h3>
                </div>
            </div>
        </Col>
    )
}

export default Certificate;
