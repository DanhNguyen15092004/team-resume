import React from "react";
import './Body.css'; 
import Certificate from "./Certificate/Certificate";
const Body = () => {
    return ( 
        <div className="body">
            <div className="certificate">
                <Certificate/>
            </div>
        </div>
    )
}
export default Body