import React from "react";
import Header from "./Header/Header";
import Body from "./Body/Body"
import ProsAndCons from "./ProsAndCons/Advantages/ProsAndCons";
const RightContent = () =>{ 
    return( 
        <div className="rightcontent">
            <Header/>
            <Body/>
            <ProsAndCons/>
        </div>
    )
}
export default RightContent
