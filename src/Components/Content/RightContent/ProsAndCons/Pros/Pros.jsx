import React from "react";
import './Pros.css'; // Assuming your CSS file is in the same directory
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots, faBookOpen, faHandshake } from "@fortawesome/free-solid-svg-icons"; // Importing multiple icons

const Pros = () => {
  return (
    <div className="pros-container">
      <div className="pros-content">
        <div className="pros-item">
          <FontAwesomeIcon icon={faCommentDots} className='custom-icon' />  
          <h4 className="pros-text">Proficient in fundamental programming and database concepts</h4>
        </div>
        <div className="pros-item">
          <FontAwesomeIcon icon={faBookOpen} className='custom-icon'/> 
          <h4 className="pros-text">Effective communication skills in a team environment</h4>
        </div>
        <div className="pros-item">
          <FontAwesomeIcon icon={faHandshake} className='custom-icon' />  
          <h4 className="pros-text">Experience using tools like Git and GitHub for source code management</h4>
        </div>
      </div>
    </div>
  );
};

export default Pros;
