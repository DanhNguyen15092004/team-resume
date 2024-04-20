import React from "react";
import './Certificate.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faAws , faLinux , faUncharted } from "@fortawesome/free-brands-svg-icons";
const Certificate = () => { 
    return ( 
        <div className="certificate"> 
                <h3 className="certificate-title">CERTIFICATE</h3>
            <div className="certificate"> 
                <h4 className="text">
                    <FontAwesomeIcon icon={faAws} className ='custom-icon' />
                    AWS Solutions Architect Associate
                </h4> 
                <h4 className="text">
                    <FontAwesomeIcon icon= {faLinux} className ='custom-icon'/>
                    Certified Web Professional - Web Developer
                </h4>
                <h4 className="text">
                    <FontAwesomeIcon icon= {faUncharted} className ='custom-icon'   /> 
                     Software Engineering Master Certification 
                </h4>
            </div>
        </div>
    )
}

export default Certificate