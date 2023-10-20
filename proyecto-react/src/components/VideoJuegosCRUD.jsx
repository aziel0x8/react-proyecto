import React from "react";

function VideoJuegosCRUD(){

    return(
        <body className="bg-dark" style={{height: "100vh"}}>
            
            <div className="">
               
                <h1 className="text-white text-center mb-5">Tienda de Video Juegos</h1>
                <button className="btn btn-danger btn-lg rounded-0 rounded-end-4">Ingresar nuevo registro</button>
                <h3 className="text-white text-center mt-4">Consultar Inventario</h3>
            </div>
            <div>
                <table></table>
            </div>
        </body>
    )
}

export default VideoJuegosCRUD