import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobile, faEnvelope, faMapMarker, faGlobe} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { Row, Col } from 'react-bootstrap';
// import './Info.css'; // Import file CSS để sử dụng lớp tùy chỉnh

const Info = () => {
  return (
    <div className='info' style={{marginTop: '20px'}}>
      <Col sm={12}>
        <Row sm={12}>
          <Col xs={2} className="icon-gap custom-icon">
            <FontAwesomeIcon icon={faEnvelope} className="custom-icon"/>
          </Col>
          <Col xs={10}>
            <p className="text small">
              <span className="icon-text-gap"> {/* Thêm một phần tử span để tạo khoảng cách */}
                johnathan@novoresume.com
              </span>
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs={2} className="icon-gap custom-icon">
            <FontAwesomeIcon icon={faMobile} className="custom-icon"/>
          </Col>
          <Col xs={10}>
            <p className="text small">
              <span className="icon-text-gap"> {/* Thêm một phần tử span để tạo khoảng cách */}
                123 6543 132
              </span>
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs={2} className="icon-gap custom-icon">
            <FontAwesomeIcon icon={faMapMarker} className="custom-icon"/>
          </Col>
          <Col xs={10}>
            <p className="text small">
              <span className="icon-text-gap"> {/* Thêm một phần tử span để tạo khoảng cách */}
                Long Beach, CA
              </span>
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs={2} className="icon-gap custom-icon">
            <FontAwesomeIcon icon={faGlobe} className="custom-icon"/>
          </Col>
          <Col xs={10}>
            <p className="text small">
              <span className="icon-text-gap"> {/* Thêm một phần tử span để tạo khoảng cách */}
                jonathan-smith.com
              </span>
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs={2} className="icon-gap custom-icon">
            <FontAwesomeIcon icon={faLinkedin} className="custom-icon"/>
          </Col>
          <Col xs={10}>
            <p className="text small">
              <span className="icon-text-gap"> {/* Thêm một phần tử span để tạo khoảng cách */}
                linkedin.com/in/jonathan.smith
              </span>
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs={2} className="icon-gap custom-icon">
            <FontAwesomeIcon icon={faGithub} className="custom-icon"/>
          </Col>
          <Col xs={10}>
            <p className="text small">
              <span className="icon-text-gap"> {/* Thêm một phần tử span để tạo khoảng cách */}
                github.com/jonathan.smith
              </span>
            </p>
          </Col>
        </Row>
      </Col>
    </div>
  )
}

export default Info;
