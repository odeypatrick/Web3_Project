import React from "react"
import tezos from "./tezos.jpg"
import "./Nav.css"
import {
    Link
} from "react-router-dom"; 

export default function Nav(){
    return(
        <div className = "body">
            <div className="container flex">
                <Link to="/"><div className="leftNav flex">
                    <img src={tezos} width="20px" height="20px" style={{ borderRadius: "100px" }}/>
                    <span>iAuthenticate</span>
                </div></Link>
                <div className="rightNav flex">
                    {/* <a href="index.css">Home</a> &nbsp;&nbsp;&nbsp;&nbsp; */}
                    <Link to="/" exact><i className="fa fa-th-large"></i> Home</Link>
                    <Link to="#"><i className="fa fa-history"></i> About Us</Link>
                    <Link to="#"><i className="fa fa-line-chart"></i> Contact Us</Link>
                </div>
            </div>
        </div>

    )
}