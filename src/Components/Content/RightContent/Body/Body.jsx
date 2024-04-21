import React from "react";
import './Body.css'; 
import Certificate from "./Certificate/Certificate";
const Body = () => {
    return ( 
        <div className="body">
            <div className="Experience">
                <h1 className="experience-title">
                    WORK EXPERIENCE
                </h1>
                <hr/>
                <Certificate/>
            </div>
        </div>
    )
}
export default Body