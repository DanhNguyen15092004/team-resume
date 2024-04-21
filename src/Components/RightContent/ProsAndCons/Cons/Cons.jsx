import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTurnUp, faBatteryHalf } from "@fortawesome/free-solid-svg-icons";
import './Cons.css'

const Cons = () => {
  return (
    <div className="cons-contaner">
      <h3 className='cons-text text'>
        <FontAwesomeIcon icon={faTurnUp} className ="custom-icon"/> Learning slowly but carefully
      </h3>
      <h3 className='cons-text text'>
        <FontAwesomeIcon icon={faBatteryHalf} className ="custom-icon"/>
         Thrive under pressure, but prioritize well-being to avoid burnout.
         Recharge quickly and come back stronger
      </h3>
    </div>
  );
};

export default Cons;