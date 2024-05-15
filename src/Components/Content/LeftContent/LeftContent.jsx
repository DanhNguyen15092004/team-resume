import React from 'react'
import Image from './Image/Image'
import Info from  './Info/Info'
import Skills from './Skills/Skills'
import { Row,Col } from 'react-bootstrap'
import SoftSkills from './SoftSkills/SoftSkills'

const LeftContent = () => {
  return (
    <Col>
      <Row className='w-100'> 
        <Image/>
    </Row>
    <Row>
        <Info/>
    </Row>
    <Row>
      <Skills/>
    </Row>
    <Row>
      <SoftSkills/>
    </Row>
    </Col>
    
  )
}

export default LeftContent
