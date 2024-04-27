import React from "react";
import './Certificate.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faAws , faLinux , faUncharted } from "@fortawesome/free-brands-svg-icons";
import { Col } from "react-bootstrap";

const Certificate = () => { 
    return ( 
        <Col className="certificate-container"> 
            <h3 className="certificate-title">CERTIFICATE</h3>
            <div className="certificate-content"> 
                <div className="certificate-item">
                    <FontAwesomeIcon icon={faAws} className='custom-icon' />
                    <h3 className="certificate-text">AWS Solutions Architect Associate</h3>
                </div>
                <div className="certificate-item">
                    <FontAwesomeIcon icon={faLinux} className='custom-icon'/>
                    <h3 className="certificate-text">Certified Web Professional - Web Developer</h3>
                </div>
                <div className="certificate-item">
                    <FontAwesomeIcon icon={faUncharted} className='custom-icon' />
                    <h3 className="certificate-text">Software Engineering Master Certification</h3>
                </div>
            </div>
        </Col>
    )
}

export default Certificate;
