import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import './DarkMode.css';

const DarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const [backgroundElements, setBackgroundElements] = useState(null);
  const [iconElements, setIconElements] = useState(null);

  useEffect(() => {
    setBackgroundElements(document.querySelectorAll(".background"));
    setIconElements(document.querySelectorAll(".custom-icon"));
  }, []);

  useEffect(() => {
      if (isDarkMode) {
        backgroundElements.forEach(e => e.classList.add("darkMode"));
        iconElements.forEach(element => element.classList.add("text-DarkMode"));
      } else {
        backgroundElements.forEach(e => e.classList.remove("darkMode"));
        iconElements.forEach(element => element.classList.remove("text-DarkMode"));
      }
    
  }, [isDarkMode]);

  return (
    <div className={`wrapperDarkMode ${isDarkMode ? 'darkMode' : ''}`} onClick={toggleDarkMode}>
      {isDarkMode ? <FontAwesomeIcon icon={faSun} className="sun darkModeIcon" /> : <FontAwesomeIcon icon={faMoon} className="moon darkModeIcon" />}
      <button onClick={toggleDarkMode} className="buttonDarkMode"></button>
    </div>
  );
};

export default DarkMode;
