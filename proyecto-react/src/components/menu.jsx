import React from "react";
import { Link } from "react-router-dom";

function Menu(){

    return(
        <div>
            <h1>Menu</h1>
            <Link to={"/"}>Principal</Link>
            <Link to={"/celulares"}>Celulares</Link>
            <Link to={"/viedeoJuegos"}>VideoJuegos</Link>
            
        </div>
    )
}

export default Menu