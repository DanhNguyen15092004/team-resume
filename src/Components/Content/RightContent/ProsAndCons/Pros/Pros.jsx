import React from "react";
import '../Pros/Pros.css' // Assuming your CSS file is in a Pros folder
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots, faBookOpen, faHandshake } from "@fortawesome/free-solid-svg-icons"; // Importing multiple icons

const Pros = () => {
  return (
    <div className="pros-contaner">
      <h3 className="pros-text text">  
        <FontAwesomeIcon icon={faCommentDots} className='custom-icon' />  
        Good communicate with teammate
      </h3>
      <h3 className="pros-text text"> 
        <FontAwesomeIcon icon={faBookOpen} className='custom-icon'/> 
        Want to learn more and more
      </h3>
      <h3 className="pros-text text">
        <FontAwesomeIcon icon={faHandshake} className='custom-icon' />  
        Good communicate with teammate  
      </h3>
    </div>
  );
};

export default Pros;
