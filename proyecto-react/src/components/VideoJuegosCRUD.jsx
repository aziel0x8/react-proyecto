import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import Tabla from "./Tabla";
import axios from "axios";

function VideoJuegosCRUD({api2}) {

    const[juegos, setJuegos] = useState()

    useEffect(() =>{
        cargarJuegos()
    }, [])

    async function cargarJuegos(){
        try{
            let res = await axios(api2)
            let data = await res.data

            setJuegos(data)
        }
        catch(error){
            alert(error)
            console.log(error)
        }
    }

    return (
        <div className="bg-dark pb-5" style={{height:"100%", display: "flex", flexDirection: "column", margin: "0"}}>

            <div className="">

                <h1 className="text-white text-center pt-3">Tienda de Video Juegos</h1>
                <Link to={"/viedeoJuegos/add"} className="btn btn-danger btn-lg rounded-0 rounded-end-4 mb-4" style={{}}>Ingresar nuevo registro<i class="bi bi-floppy ps-2"></i></Link>
                <h3 className="text-white text-center mt-4">Consultar Inventario</h3>
            </div>

            <div className="ms-4 me-4 mt-4">
            {
                juegos === undefined ?
                    <div className="text-white">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Cargando Datos..</span>
                            
                        </div>
                        <h1>Cargando</h1>
                    </div>
                :
                <Tabla controlador={"viedeoJuegos"} list={juegos} cols={["JuegoID", "Titulo", "Descripcion", "Plataforma", "Precio", "Categoria", "Operaciones"]} />
            }  
            </div>
        </div>
    )
}
export default VideoJuegosCRUD;
