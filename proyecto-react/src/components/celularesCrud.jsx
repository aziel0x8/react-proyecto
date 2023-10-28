
import { Link } from "react-router-dom";

import React, {useState, useEffect} from "react";
import Tabla from "./Tabla";
import axios from "axios";

function CelularesCRUD({api}){

    const[celulares, setCelulares] = useState()

    useEffect(() =>{
        cargarCelulares()
    }, [])

    async function cargarCelulares(){
        try{
            let res = await axios(api)
            let data = await res.data

            setCelulares(data)
        }
        catch(error){
            alert(error)
            console.log(error)
        }
    }


    return(

        <div className="bg-danger pb-5" style={{height:"100%", display: "flex", flexDirection: "column", margin: "0"}}>
            
            <div>
                <h1 className="text-white text-center pt-3">Tienda de Celulares</h1>
                
                <Link to={"/celulares/add"} className="btn btn-dark btn-lg rounded-0 rounded-end-4">Ingresar nuevo registro<i class="bi bi-floppy ps-2"></i></Link>
                <h3 className="text-white text-center mt-4">Consultar Inventario</h3>
            </div>
            <div className="ms-4 me-4 mt-4">
            {
                celulares === undefined ?
                    <div>
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Cargando Datos..</span>
                            
                        </div>
                        <h1>Cargando</h1>
                    </div>
                :
                <Tabla controlador={"celulares"} list={celulares} cols={["CelularId", "Marca", "Modelo", "Color", "Precio", "Descripcion", "Operadora", "Operaciones"]} />
            }
            </div>
        </div>
    )
        
}

export default CelularesCRUD