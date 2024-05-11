import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import './DarkMode.css';

const DarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    const backgroundElements = document.querySelectorAll(".background");
    const iconElements = document.querySelectorAll(".custom-icon  ");
    const texts = document.querySelectorAll(".text");
    console.log(texts)

    if (isDarkMode) {
      backgroundElements.forEach(e => e.classList.add("darkMode"));
      iconElements.forEach(element => element.classList.add("text-DarkMode"));
      texts.forEach(ele =>  ele.classList.add("text-DarkMode"));
    } else {
      backgroundElements.forEach(e => e.classList.remove("darkMode"));
      iconElements.forEach(element => element.classList.remove("text-DarkMode"));
      texts.forEach(ele =>  ele.classList.remove("text-DarkMode"));

    }
  }, [isDarkMode]);

  return (
    <div className={`wrapperDarkMode ${isDarkMode ? 'darkMode' : ''}`} onClick={toggleDarkMode}>
      {isDarkMode ? <FontAwesomeIcon icon={faSun} className="sun darkModeIcon" /> : <FontAwesomeIcon icon={faMoon} className="moon darkModeIcon" />}
    </div>
  );
};

export default DarkMode;
