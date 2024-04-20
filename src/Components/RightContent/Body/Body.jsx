import React from "react";
import './Body.css'; 
import Certificate from "./Certificate/Certificate";
import Technology from "./Technology/Technology";
const Body = () => {
    return ( 
        <div className="body">
            <div className="Experience">
                <h1 className="experience-title">
                    WORK EXPERIENCE
                </h1>
                <hr/>
                <Certificate/>
                <Technology/>
            </div>
        </div>
    )
}
export default Body