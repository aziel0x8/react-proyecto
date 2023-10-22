import React from "react";
import { Link } from "react-router-dom";
function VideoJuegosCRUD() {

    const dummyData = [
        { producto: "Super Mario Odyssey", idProducto: "SMO123", precio: "$49.99", cantidad: "5" },
        { producto: "The Legend of Zelda: Breath of the Wild", idProducto: "ZBOTW456", precio: "$59.99", cantidad: "3" },
        { producto: "Red Dead Redemption 2", idProducto: "RDR2789", precio: "$39.99", cantidad: "10" },
        { producto: "Final Fantasy VII Remake", idProducto: "FF7R321", precio: "$55.99", cantidad: "4" },
        { producto: "Minecraft", idProducto: "MCRF645", precio: "$24.99", cantidad: "8" },
        { producto: "Halo Infinite", idProducto: "HALINF890", precio: "$64.99", cantidad: "7" },
        { producto: "God of War", idProducto: "GOW231", precio: "$49.99", cantidad: "6" },
        { producto: "Cyberpunk 2077", idProducto: "CP2077645", precio: "$44.99", cantidad: "9" },
        { producto: "Assassin's Creed Valhalla", idProducto: "ACV982", precio: "$54.99", cantidad: "2" },
        { producto: "FIFA 22", idProducto: "FIFA22976", precio: "$59.99", cantidad: "12" }
    ];

    return (
        <body className="bg-dark" style={{ height: "100vh" }}>

            <div className="container-fluid">

                <h1 className="text-white text-center pt-3">Tienda de Video Juegos</h1>
                {/* <button className="btn btn-danger btn-lg rounded-0 rounded-end-4 mb-4">Ingresar nuevo registro</button> */}
                <Link to={"/viedeoJuegosFORM"} className="btn btn-danger btn-lg rounded-0 rounded-end-4 mb-4">Ingresar nuevo registro</Link>
                <h3 className="text-white text-center mt-4">Consultar Inventario</h3>

                <div className="col-md-10 mx-auto mt-4">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">Producto</th>
                                <th scope="col">Id Producto</th>
                                <th scope="col">Precio</th>
                                <th scope="col">Cantidad</th>
                                <th scope="col">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
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
                        </tbody>
                    </table>
                </div>
            </div>
        </body>
    )
}

export default VideoJuegosCRUD;
