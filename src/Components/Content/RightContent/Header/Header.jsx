import React from "react";
import './Header.css';
import Image from "../../LeftContent/Image/Image"; // Assuming this is your image component
import { useSelector } from "react-redux";
import WindowSizeListener from '../../../WindowSizeListener/WindowSizeListener'; // Import the WindowSizeListener component
import { Col, Row } from "react-bootstrap";

const Header = () => {
  const isMobile = useSelector((state) => state.isMobile.value);
  
  return (
    <div>
      <WindowSizeListener /> 
      {isMobile ? (
        <div className="header-container">
          <Row>
            <Col className="small-img">
              <Image />
            </Col>
            <Col className="small-desc">
              <h1 className="cv-header-name">Danh Nguyen Hoang Cong</h1>
              <h2 className="cv-header-title">Intern Web Developer</h2>
            </Col>
          </Row>
          <Row>
            <Col className="small-desc">
              <p className="cv-header-description">
                Having recently graduated from university, I bring a solid foundation in web development principles
                and a strong desire to apply them in a real-world setting. I thrive in collaborative environments where 
                teamwork and efficiency are valued. My adaptability and eagerness to learn allow me to quickly integrate
                with your team's technology stack and methodologies. I'm enthusiastic about contributing to innovative 
                projects and becoming a valuable asset to your company.
              </p>
            </Col>
          </Row>
        </div>
      ) : ( 
        <div className="cv-header-container">
          <div className="header-wrapper">
            <h1 className="cv-header-name">Danh Nguyen Hoang Cong</h1>
            <h2 className="cv-header-title">Intern Web Developer</h2>
            <hr style={{ width: '70%' }} />
            <p className="cv-header-description">
              Having recently graduated from university, I bring a solid foundation in web development principles
              and a strong desire to apply them in a real-world setting. I thrive in collaborative environments where 
              teamwork and efficiency are valued. My adaptability and eagerness to learn allow me to quickly integrate
              with your team's technology stack and methodologies. I'm enthusiastic about contributing to innovative 
              projects and becoming a valuable asset to your company.
            </p>
          </div>     
        </div>
      )}
    </div>
  );
};

export default Header;
