import React from "react";
import { Link } from "react-router-dom";

function CelularesFORM(){

    return(
        <body className="bg-danger pb-5" style={{height: "100vh"}}>
            
            <div>
               
                <h1 className="text-white text-center pt-3">Tienda de Celulares</h1>
                <Link to={"/celulares"} className="btn btn-dark btn-lg rounded-0 rounded-end-4">Ir a Tienda de Celulares</Link>
                <h3 className="text-white text-center mt-4 mb-3">Ingreso de Inventario</h3>
            </div>
            <div className="bg-dark position-relative pt-4 rounded-3" style={{height: "400px", width: "55%", marginLeft: "22%"}} >

                <div className="form-floating pt-3 ms-5 me-5 ps-5 pe-5">
                    <input type="text" className="form-control" />
                    <label htmlFor="" className="text-black ms-5" >ID:</label>
                </div>

                <div className="d-inline-block w-50 position-relative text-center ">
                    <div className="form-floating m-3">
                        <input type="text" className="form-control" />
                        <label htmlFor="" className="text-black" >Marca:</label>
                    </div>
                    

                    <div className="form-floating m-3">
                        <input type="text" className="form-control"/>
                        <label htmlFor="" className="text-black">Modelo:</label>
                    </div>
                    

                    <div className="form-floating m-3">
                        <input type="text" className="form-control"/>
                        <label htmlFor="" className="text-black">Color:</label>
                    </div>
                    

                    <button className="btn btn-danger">Agregar</button>
                </div>
                
                <div className="d-inline-block w-50 position-relative text-center ">
                    <div className="form-floating m-3">
                        <input type="text" className="form-control" />
                        <label htmlFor="" className="text-black">Descripcion:</label>
                    </div>
                    
                    <div className="form-floating m-3">
                        <input type="text" className="form-control"/>
                        <label htmlFor="" className="text-black">Precio:</label>
                    </div>
                    
                    <div className="form-floating m-3">
                        <input type="text" className="form-control" />
                        <label htmlFor="" className="text-black">Operadora:</label>
                    </div>
                    

                    <button className="btn btn-danger">Cancelar</button>
                </div>
            </div>
        </body>
    )
}

export default CelularesFORM