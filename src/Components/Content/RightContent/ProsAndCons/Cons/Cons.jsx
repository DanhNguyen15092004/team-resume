import React from "react";
import './Cons.css'; // Assuming your CSS file is in the same directory
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle, faTasks, faUserFriends } from "@fortawesome/free-solid-svg-icons"; // Importing multiple icons

const Cons = () => {
  return (
    <div className="cons-container">
      <div className="cons-content">
        <div className="cons-item">
          <FontAwesomeIcon icon={faTimesCircle} className='custom-icon'/>  
          <h4 className="cons-text">Limited Experience in Production Environments</h4>
        </div>
        <div className="cons-item">
          <FontAwesomeIcon icon={faTasks} className='custom-icon'/> 
          <h4 className="cons-text">May Require Guidance with Complex Technical Tasks</h4>
        </div>
        <div className="cons-item">
          <FontAwesomeIcon icon={faUserFriends} className='custom-icon' />  
          <h4 className="cons-text">Potential for Struggles in Collaborating with Senior Team Members</h4>
        </div>
      </div>
    </div>
  );
};

export default Cons;
