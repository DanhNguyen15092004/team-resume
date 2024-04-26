import React from 'react';
import './Image.css';
import image from '../../../Assets/img.jpg';
import {Col } from 'react-bootstrap';

const Image = () => {
  return (
    <Col className='image-myself' sm={12} >
      <img src={image} alt="" className="img-fluid" />
    </Col>
  );
};

export default Image;
