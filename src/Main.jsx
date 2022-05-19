import React from "react"
import "./Main.css"
import {
    Link
} from "react-router-dom";

export default function Main(){
    return(
        <div className="main">
            <div className="container flex">
                <div className="text">
                    <h1 style={{fontSize: "50px"}}>iAuthenticate</h1>
                    <h1>Verify your Pharmaceutical Products</h1>
                    <Link to="/verify"><button><a href="#index.css">Verify</a></button></Link>
                    
                </div>
                <div className = "image">
                    <img src="https://images.pexels.com/photos/3683070/pexels-photo-3683070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="pill"/>
                </div>
            </div>
        </div>
        
    )
}
