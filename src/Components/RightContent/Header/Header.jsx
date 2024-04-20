import React from "react";
import './Header.css'
const Header = () => { 
    return (
        <div className="cv-header-container">
            <h1 className='cv-header-name text'>
                Nguyen Hoang Cong Danh
            </h1>
            <h2 className="cv-header-title text">
                Intern Web Development
            </h2>
            <hr style={{ width: '70%',  }} />
            <p className="cv-header-description text">
                I just graduated from university . And i have some experience to working effeciently with teammate in
                all team that i joined . Im love working in the professional enviroment like your company . And i can 
                adapt the technology of the company desire with my learning experience. 
            </p>
        </div>
      )
}

export default Header