import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./home";
import CelularesCRUD from "./celularesCrud";
import VideoJuegosCRUD from "./VideoJuegosCRUD";
import NotFound from "./NotFound";
import Menu from "./menu";

function App(){

    return(
        <BrowserRouter>
            <Menu></Menu>
            <Routes>
                <Route path="/" element={<Home></Home>} ></Route>
                <Route path="/celulares" element={<CelularesCRUD></CelularesCRUD>}></Route>
                <Route path="/viedeoJuegos" element={<VideoJuegosCRUD></VideoJuegosCRUD>}></Route>
                <Route path="*" element={<NotFound></NotFound>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App