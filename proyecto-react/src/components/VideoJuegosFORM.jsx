import React from "react";
import { Link } from "react-router-dom";

function VideoJuegosFORM(){

    return(
        <body className="bg-dark pb-5" style={{height: "100vh"}}>
            
            <div>
                <h1 className="text-white text-center pt-3">Tienda de Video Juegos</h1>
                <Link to={"/viedeoJuegos"} className="btn btn-danger btn-lg rounded-0 rounded-end-4">Ir a Tienda de Video Juegos</Link>
                <h3 className="text-white text-center mt-4 mb-3">Ingreso de Inventario</h3>
            </div>
            <div className="bg-danger position-relative pt-4 rounded-3" style={{height: "330px", width: "55%", marginLeft: "22%"}} >

                <div className="d-inline-block w-50 position-relative text-center ">
                    <div className="form-floating m-3">
                        <input type="text" className="form-control" />
                        <label htmlFor="" className="text-black" >ID:</label>
                    </div>
                    

                    <div className="form-floating m-3">
                        <input type="text" className="form-control"/>
                        <label htmlFor="" className="text-black">Titulo:</label>
                    </div>
                    

                    <div className="form-floating m-3">
                        <input type="text" className="form-control"/>
                        <label htmlFor="" className="text-black">Descripcion:</label>
                    </div>
                    

                    <button className="btn btn-dark">Agregar</button>
                </div>
                
                <div className="d-inline-block w-50 position-relative text-center ">
                    <div className="form-floating m-3">
                        <input type="text" className="form-control" />
                        <label htmlFor="" className="text-black">Plataforma:</label>
                    </div>
                    
                    <div className="form-floating m-3">
                        <input type="text" className="form-control"/>
                        <label htmlFor="" className="text-black">Precio:</label>
                    </div>
                    
                    <div className="form-floating m-3">
                        <input type="text" className="form-control" />
                        <label htmlFor="" className="text-black">Categoria:</label>
                    </div>
                    

                    <button className="btn btn-dark">Cancelar</button>
                </div>
            </div>
        </body>
    )
}

export default VideoJuegosFORM