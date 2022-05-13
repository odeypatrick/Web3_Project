import React from "react"
import tezos from "./tezos.jpg"
import "./Nav.css"

export default function Nav(){
    return(
        <div className = "body">
            <div className="leftNav">
            <img src={tezos} width="20px" height="20px"/>
            <span>iAuthenticate</span>
            </div>
            <div className="rightNav">
                <a href="index.css">Home</a> &nbsp;&nbsp;&nbsp;&nbsp;
                <a href="index.css">About Us</a> &nbsp;&nbsp;&nbsp;&nbsp;
                <a href="index.css">Contact Us</a> &nbsp;&nbsp;&nbsp;&nbsp;
                {/* <a href="index.css">Home</a> &nbsp;&nbsp;&nbsp;&nbsp; */}
            </div>
            
        </div>

    )
}