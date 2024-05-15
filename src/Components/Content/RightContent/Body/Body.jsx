import React from "react";
import './Body.css'; 
import Certificate from "./Certificate/Certificate";
import { Col } from "react-bootstrap";
const Body = () => {
    return ( 
        <Col className="body">
            <div className="Experience">
                <h1 className="experience-title title">
                    WORK EXPERIENCE
                </h1>
                <hr/>
                <Certificate/>
            </div>
        </Col>
    )
}
export default Body