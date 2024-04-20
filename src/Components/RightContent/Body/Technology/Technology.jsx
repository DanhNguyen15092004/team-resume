import React from "react";
import './Technology.css' 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact ,faWindows , faServicestack} from "@fortawesome/free-brands-svg-icons";
const Technology = () => { 
    return ( 
        <div className="technology"> 
                <h3 className="technology-title">TECHNOLOGY</h3>
            <div className="technology-content"> 
                <h4 className="text">
                    <FontAwesomeIcon icon={faReact} className ='custom-icon' />
                    React 
                </h4> 
                <h4 className="text">
                    <FontAwesomeIcon icon= {faWindows} className ='custom-icon'/>
                    Microsoft Development 
                </h4>
                <h4 className="text">
                    <FontAwesomeIcon icon= {faServicestack} className ='custom-icon'   /> 
                     Database 
                </h4>
            </div>
        </div>
    )
}
export default Technology