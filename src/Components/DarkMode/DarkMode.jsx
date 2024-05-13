import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import './DarkMode.css';
import { Col } from "react-bootstrap";
const DarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('darkMode');
  };
  return (
    <Col>
          <div className="wrapperDarkMode" >
          <FontAwesomeIcon icon={isDarkMode ? faMoon : faSun} className="darkModeIcon"  onClick={toggleDarkMode}/>
        </div>
    </Col>
  );
};

export default DarkMode;
