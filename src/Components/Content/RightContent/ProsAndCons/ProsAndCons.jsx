import React from "react";
import Pros from "./Pros/Pros";
import Cons from "./Cons/Cons"
import { Col } from "react-bootstrap";
import './ProsAndCons.css'
const ProsAndCons = () => { 
    return (
        <Col className="ProsAndConsContainer">
           <h1 className="prosAndCons-title">
                ADVANTAGES AND DISADVANTAGES
            </h1>
            <hr/>
            <h3 className="prosAndCons-title-child">
                    ADVANTAGES
            </h3>
                <Pros/>
            <h3 className="prosAndCons-title-child  ">
                    DISADVANTAGES
            </h3>
                <Cons/>
        </Col>
    )
}
export default ProsAndCons