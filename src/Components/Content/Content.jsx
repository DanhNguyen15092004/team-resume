import React from 'react'
// import './Content.css'
import LeftContent from './LeftContent/LeftContent'
import RightContent from './RightContent/RightContent'
import { Container, Col, Row } from 'react-bootstrap'


const Content = () => {
  return (
    // <div className="container">
    <Container className="d-flex justify-content-center align-items-center">
      <Row>
        <Col sm={3}>
          <LeftContent />
        </Col>
        <Col sm={9}>
          <RightContent />
        </Col>
      </Row>
    </Container>
       
            
         
    // </div>
  )
}

export default Content
