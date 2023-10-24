import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./home";
import CelularesCRUD from "./celularesCrud";
import VideoJuegosCRUD from "./VideoJuegosCRUD";
import NotFound from "./NotFound";
import Menu from "./menu";
import CelularesFORM from "./CelularesFORM";
import VideoJuegosFORM from "./VideoJuegosFORM";

import React, {useState} from "react";

function App(){
    const[apiCelulares, setApiCelulares] = useState("https://denny2023.azurewebsites.net/api/celulares");
    const[apiJuegos, setApiJuegos ] = useState("https://denny2023.azurewebsites.net/api/juegos")

    return(
        <BrowserRouter>
            <Menu></Menu>
            <Routes>
                <Route path="/" element={<Home></Home>} ></Route>
                <Route path="/celulares" element={<CelularesCRUD api={apiCelulares}/>}></Route>
                <Route path="/celulares/add" element={<CelularesFORM api={apiCelulares} />} />
                <Route path="/celulares/edit/:id" element={<CelularesFORM api={apiCelulares} />} />
                <Route path="/celulares/delete/:id" element={<CelularesFORM del={true} api={apiCelulares} />} />
                <Route path="/viedeoJuegos" element={<VideoJuegosCRUD api2={apiJuegos}/>} />
                <Route path="/viedeoJuegos/add" element={<VideoJuegosFORM api2={apiJuegos}/>} />
                <Route path="/viedeoJuegos/edit/:id" element={<VideoJuegosFORM  api2={apiJuegos}/>} />
                <Route path="/viedeoJuegos/delete/:id" element={<VideoJuegosFORM del={true}  api2={apiJuegos}/>} />
                <Route path="*" element={<NotFound></NotFound>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;
