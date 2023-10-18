import React from "react";

function CelularesFORM(){

    return(
        <body className="bg-danger" style={{height: "539px"}}>
            
            <div>
               
                <h1 className="text-white text-center mb-5">Tienda de Celulares</h1>
                <button className="btn btn-dark btn-lg rounded-0 rounded-end-4">Ir a Tienda de Celulares</button>
                <h3 className="text-white text-center mt-4">Ingreso de Inventario</h3>
            </div>
            <div className="bg-dark position-relative rounded-3 m-4" style={{height: "300px", width: "55%"}} >
                <div className="d-inline-block w-50 position-relative text-center mt-2">
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
                <div className="d-inline-block w-50 position-relative text-center">
                    <label htmlFor="" className="text-white">Descripcion</label>
                    <input type="text" className="form-control" />

                    <label htmlFor="" className="text-white">Precio</label>
                    <input type="text" className="form-control"/>

                    <label htmlFor="" className="text-white">Operadora</label>
                    <input type="text" className="form-control" />

                    <button className="btn btn-danger">Cancelar</button>
                </div>
            </div>
        </body>
    )
}

export default CelularesFORM