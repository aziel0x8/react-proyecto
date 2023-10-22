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
            <div className="col-md-10 mx-auto mt-4">
            <div >
            <table className="table table-bordered rounded">
                        <thead>
                            <tr>
                                <th scope="col">celularId</th>
                                <th scope="col">marca</th>
                                <th scope="col">modelo</th>
                                <th scope="col">color</th>
                                <th scope="col">precio</th>
                                <th scope="col">precio</th>
                                <th scope="col">descripcion</th>
                                <th scope="col">operadora</th>
                            </tr>
                        </thead>
                        {/* <tbody>
                            {dummyData.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.producto}</td>
                                    <td>{item.idProducto}</td>
                                    <td>{item.precio}</td>
                                    <td>{item.cantidad}</td>
                                    <td>
                                        <button className="btn btn-danger btn-sm mr-2">Eliminar</button>
                                        <button className="btn btn-secondary btn-sm">Editar</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody> */}
                    </table>
            </div>
            </div>
        </body>
    )
        
}

export default CelularesCRUD