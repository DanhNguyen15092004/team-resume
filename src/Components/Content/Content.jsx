import React from 'react';
import LeftContent from './LeftContent/LeftContent';
import RightContent from './RightContent/RightContent';
import { Container, Col, Row } from 'react-bootstrap';
import Skills from './LeftContent/Skills/Skills';
import Info from './LeftContent/Info/Info';
import ProsAndCons from './RightContent/ProsAndCons/ProsAndCons';
import Header from './RightContent/Header/Header';
import Body from './RightContent/Body/Body';
import './Content.css';
import { useSelector } from 'react-redux';
import WindowSizeListener from '../WindowSizeListener/WindowSizeListener'

const Content = () => {
  const mobile = useSelector((state) => state.isMobile.value); // Access state

  return (
    <Container className="d-flex justify-content-center align-items-center">
      <WindowSizeListener /> 
      {!mobile ? (
        <Row>
          <Col sm={6} md={5} lg={5} xl={3}>
            <LeftContent />
          </Col>
          <Col sm={6} md={7} lg={7} xl={7}>
            <RightContent />
          </Col>
        </Row>
      ) : (
        <Row>
          <Col sm={12}> 
              <Header/>
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
            <h1 className='contact-title'>CONTACT</h1>
            <Info />
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default Content
