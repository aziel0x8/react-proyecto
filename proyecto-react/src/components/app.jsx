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
    const[apiCelulares, setApiCelulares] = useState("https://denny2023.azurewebsites.net/api/celulares")

    return(
        <BrowserRouter>
            <Menu></Menu>
            <Routes>
                <Route path="/" element={<Home></Home>} ></Route>
                <Route path="/celulares" element={<CelularesCRUD api={apiCelulares}/>}></Route>
                <Route path="/viedeoJuegos" element={<VideoJuegosCRUD />} />
                <Route path="/viedeoJuegos/add" element={<VideoJuegosFORM />} />
                <Route path="/viedeoJuegos/edit/:id" element={<VideoJuegosFORM />} />
                <Route path="/viedeoJuegos/delete/:id" element={<VideoJuegosFORM del={true} />} />
                <Route path="/celularesFORM" element={<CelularesFORM></CelularesFORM>}></Route>
                <Route path="*" element={<NotFound></NotFound>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;
