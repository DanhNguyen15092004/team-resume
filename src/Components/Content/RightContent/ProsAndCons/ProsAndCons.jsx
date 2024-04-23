import React from "react";
import Pros from "./Pros/Pros";
import Cons from "./Cons/Cons"
import { Col } from "react-bootstrap";
const ProsAndCons = () => { 
    return (
        <Col className="ProsAndConsContainer">
           <h1 className="experience-title">
                    PROS AND CONS 
                </h1>
                <hr/>
                <h3 className="certificate-title">
                    ADVANTAGES
                </h3>
                <Pros/>
                <h3 className="certificate-title">
                    DISADVANTAGES
                </h3>
                <Cons/>
        </Col>
    )
}
export default ProsAndCons