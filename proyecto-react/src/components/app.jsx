import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./home";
import CelularesCRUD from "./celularesCrud";
import VideoJuegosCRUD from "./VideoJuegosCRUD";
import NotFound from "./NotFound";
import Menu from "./menu";
import CelularesFORM from "./CelularesFORM";
import VideoJuegosFORM from "./VideoJuegosFORM";

function App(){

    return(
        <BrowserRouter>
            <Menu></Menu>
            <Routes>
                <Route path="/" element={<Home></Home>} ></Route>
                <Route path="/celulares" element={<CelularesCRUD></CelularesCRUD>}></Route>
                <Route path="/viedeoJuegos" element={<VideoJuegosCRUD></VideoJuegosCRUD>}></Route>
                <Route path="*" element={<NotFound></NotFound>}></Route>
                <Route path="/celularesFORM" element={<CelularesFORM></CelularesFORM>}></Route>
                <Route path="/viedeoJuegosFORM" element={<VideoJuegosFORM></VideoJuegosFORM>}></Route>

            </Routes>
        </BrowserRouter>
    )
}

export default App