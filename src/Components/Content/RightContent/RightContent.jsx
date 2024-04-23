import React from "react";
import Header from "./Header/Header";
import Body from "./Body/Body"
import ProsAndCons from "./ProsAndCons/ProsAndCons";
import { Col, Row } from "react-bootstrap";
const RightContent = () =>{ 
    return( 
        // <div className="rightcontent">
        //     <Header/>
        //     <Body/>
        //     <ProsAndCons/>
        // </div>
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
        </Col>
    )
}
export default RightContent
