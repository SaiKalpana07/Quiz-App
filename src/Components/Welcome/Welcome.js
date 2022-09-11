import React from "react";
import "./Welcome.css";
// import {Link} from "react-router-dom";

import {useNavigate} from "react-router-dom";
function Welcome() {
    let navigate=useNavigate();
    return(
        <div className="Container">
            <h1>Start Quiz!!</h1>
             <button onClick={() =>{navigate("/userdetails")}} class="button1">Next</button> 
        </div>
    )
}
export default Welcome;
