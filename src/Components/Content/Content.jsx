import React, { useState, useEffect } from 'react';
import LeftContent from './LeftContent/LeftContent';
import RightContent from './RightContent/RightContent';
import { Container, Col, Row } from 'react-bootstrap';
import Skills from './LeftContent/Skills/Skills';
import Info from './LeftContent/Info/Info';
import ProsAndCons from './RightContent/ProsAndCons/ProsAndCons';
import Image from './LeftContent/Image/Image';
import Header from './RightContent/Header/Header';
import Body from './RightContent/Body/Body';

const Content = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600); // Adjust the threshold as needed
    };

    // Call handleResize once initially to set isMobile state based on window width
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup function to remove event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Container className="d-flex justify-content-center align-items-center">
      {!isMobile ? (
        <Row>
          <Col sm={3}>
            <LeftContent />
          </Col>
          <Col sm={9}>
            <RightContent />
          </Col>
        </Row>
      ) : (
        <Row>
          <Col sm={12}> 
            <Image/>
          </Col>
          <Col sm={12}>
            <Header />
          </Col>
          <Col sm={12}> 
            <Body />
          </Col>
          <Col sm={12}>
            <Skills />
          </Col>
          <Col sm={12}>
            <ProsAndCons />
          </Col>
          <Col sm={12}>
            <Info />
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default Content;
