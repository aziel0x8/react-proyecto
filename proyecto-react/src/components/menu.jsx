import React from "react";
import { Link } from "react-router-dom";

function Menu(){

    return(
        <div>
            
            
            
            
            <Link to={"/viedeoJuegosFORM"}>VJ-FORM</Link>
            <Link to={"/celularesFORM"}>cel-FORM</Link>

            <nav className="navbar navbar-expand-lg text-white bg-dark bg-gradient">
                <div className="container-fluid">
                <h2>KodiTeam</h2>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to={"/"} className="nav-link text-white">Inicio</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/celulares"} className="nav-link text-white">Celulares</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/viedeoJuegos"} className="nav-link text-white">VideoJuegos</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            
        </div>
    )
}

export default Menu