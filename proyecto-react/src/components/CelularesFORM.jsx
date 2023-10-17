import React from "react";

function CelularesFORM(){

    return(
        <body className="bg-danger" style={{height: "539px"}}>
            
            <div>
               
                <h1 className="text-white text-center mb-5">Tienda de Celulares</h1>
                <button className="btn btn-dark btn-lg rounded-0 rounded-end-4">Ir a Tienda de Celulares</button>
                <h3 className="text-white text-center mt-4">Ingreso de Inventario</h3>
            </div>
            <div>
                <div>
                    <label htmlFor="">Marca</label>
                    <input type="text" />

                    <label htmlFor="">Modelo</label>
                    <input type="text" />

                    <label htmlFor="">Color</label>
                    <input type="text" />

                    <button>Agregar</button>
                </div>
                <div>
                    <label htmlFor="">Descripcion</label>
                    <input type="text" />

                    <label htmlFor="">Precio</label>
                    <input type="text" />

                    <label htmlFor="">Operadora</label>
                    <input type="text" />

                    <button>Cancelar</button>
                </div>
            </div>
        </body>
    )
}

export default CelularesFORM