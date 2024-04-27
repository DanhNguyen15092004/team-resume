import React from "react";
import './Header.css'
import { Col } from "react-bootstrap";
const Header = () => { 
    return (
        <Col className="cv-header-container">
            <div className="header-wrapper">
                <h1 className='cv-header-name text'>
                    Danh Nguyen Hoang Cong 
                </h1>
                <h2 className="cv-header-title text">
                    Intern Web Developer
                </h2>
                <hr style={{ width: '70%'}} />
                <p className="cv-header-description text">
                    Having recently graduated from university,
                    I bring with me a solid foundation in collaborating effectively within teams across various projects.
                    I thrive in professional environments such as yours, where teamwork and efficiency are paramount.
                    My adaptability, coupled with my eagerness to learn, allows me to quickly integrate 
                    and align with the technology and methodologies embraced by the company. 
                    I am enthusiastic about the opportunity to contribute to the success of your team.
                </p>
            </div>
        </Col>
      )
}

export default Header