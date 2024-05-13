import React from 'react';
import './Image.css';
import image from '../../../Assets/img.jpg';
import {Col } from 'react-bootstrap';

const Image = () => {
  return (
    <Col className='image-myself'  >
      <img src={image} alt="My Face " />
    </Col>
  );
};

export default Image;
