import React from "react";
import { Link } from "react-router-dom";

function CelularesCRUD(){

    return(

        <body className="bg-danger" style={{height: "100vh"}}>
            
            <div>
                <h1 className="text-white text-center pt-3">Tienda de Celulares</h1>
                
                <Link to={"/celularesFORM"} className="btn btn-dark btn-lg rounded-0 rounded-end-4">Ingresar nuevo registro</Link>
                <h3 className="text-white text-center mt-4">Consultar Inventario</h3>
            </div>
            <div >
                <table></table>
            </div>
        </body>
    )
        
}

export default CelularesCRUD