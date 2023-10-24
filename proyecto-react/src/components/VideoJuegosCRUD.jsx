import React from "react";
import { Link } from "react-router-dom";

function VideoJuegosCRUD() {

    const dummyData = [
        { JuegoID: "SMO123", Titulo: "Super Mario Odyssey", Descripcion: "Aventura con Mario", Plataforma: "Switch", Precio: "$49.99", Categoria: "Aventura" },
        // ... otros registros
    ];

    return (
        <div className="bg-dark pb-5" style={{ height: "100%" }}>

            <div className="container-fluid">

                <h1 className="text-white text-center pt-3">Tienda de Video Juegos</h1>
                <Link to={"/viedeoJuegos/add"} className="btn btn-danger btn-lg rounded-0 rounded-end-4 mb-4">Ingresar nuevo registro</Link>
                <h3 className="text-white text-center mt-4">Consultar Inventario</h3>

                <div className="col-md-10 mx-auto mt-4">
                    <div className="table-responsive"> 
                        <table className="table" style={{ backgroundColor: 'transparent' }}>
                            <thead className="border-bottom" style={{ backgroundColor: 'transparent' }}>
                                <tr style={{ backgroundColor: 'transparent' }}>
                                    <th scope="col">JuegoID</th>
                                    <th scope="col">Titulo</th>
                                    <th scope="col">Descripcion</th>
                                    <th scope="col">Plataforma</th>
                                    <th scope="col">Precio</th>
                                    <th scope="col">Categoria</th>
                                    <th scope="col">Acciones</th>
                                </tr>
                            </thead>
                            <tbody style={{ backgroundColor: 'transparent' }}>
                                {dummyData.map((item, index) => (
                                    <tr key={index} className="border-bottom" style={{ backgroundColor: 'transparent' }}>
                                        <td>{item.JuegoID}</td>
                                        <td>{item.Titulo}</td>
                                        <td>{item.Descripcion}</td>
                                        <td>{item.Plataforma}</td>
                                        <td>{item.Precio}</td>
                                        <td>{item.Categoria}</td>
                                        <td>
                                            <Link to={`/viedeoJuegos/delete/${Object.values(item)[0]}`} className="btn btn-danger btn-sm mr-2">Eliminar</Link>
                                            <Link to={`/viedeoJuegos/edit/${Object.values(item)[0]}`} className="btn btn-secondary btn-sm">Editar</Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default VideoJuegosCRUD;
