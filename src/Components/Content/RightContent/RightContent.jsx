import React from "react";
import Header from "./Header/Header";
import Body from "./Body/Body"
import ProsAndCons from "./ProsAndCons/ProsAndCons";
import { Col, Row } from "react-bootstrap";
import Project from "./Project/Project";
const RightContent = () =>{ 
    return(
        <Col>
        <Row>
            <Header/>
        </Row>
        <Row>
            <Body/>
        </Row>
        <Row>
            <ProsAndCons/>
        </Row>
        <Row>
            <Project/>
        </Row>
        </Col>
    )
}
export default RightContent
