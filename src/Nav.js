import React from "react"
import tezos from "./tezos.jpg"
import "./Nav.css"
import {
    NavLink
} from "react-router-dom"; 

export default function Nav(){
    return(
        <div className = "body">
            <div className="leftNav">
            <img src={tezos} width="20px" height="20px"/>
            <span>iAuthenticate</span>
            </div>
            <div className="rightNav">
                {/* <a href="index.css">Home</a> &nbsp;&nbsp;&nbsp;&nbsp; */}
                <NavLink to="/" exact><i className="fa fa-th-large"></i> Home</NavLink>
                <NavLink to="/history"><i className="fa fa-history"></i> About Us</NavLink>
                <NavLink to="/analytics"><i className="fa fa-line-chart"></i> Contact Us</NavLink>
            </div>
            
        </div>

    )
}