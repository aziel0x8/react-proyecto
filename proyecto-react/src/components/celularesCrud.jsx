import React from "react";

function CelularesCRUD(){

    return(

        <body className="bg-danger" style={{height: "100vh"}}>
            
            <div>
               
                <h1 className="text-white text-center mb-5">Tienda de Celulares</h1>
                <button className="btn btn-dark btn-lg rounded-0 rounded-end-4">Ingresar nuevo registro</button>
                <h3 className="text-white text-center mt-4">Consultar Inventario</h3>
            </div>
            <div>
                <table></table>
            </div>
        </body>
    )
        
}

export default CelularesCRUD