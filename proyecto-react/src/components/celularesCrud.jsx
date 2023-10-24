
import { Link } from "react-router-dom";

import React, {useState, useEffect} from "react";
import Tabla from "./Tabla";
import axios from "axios";

function CelularesCRUD({api}){

    const[autores, setAutores] = useState()

    useEffect(() =>{
        cargarAutores()// Invoca la solicitud del metodo que devuelve los autores
    }, [])

    async function cargarAutores(){
        try{
            let res = await axios(api)// Solicitud de tipo GET hacia autores
            let data = await res.data// Convertimos el resultado en un array de objetos de tipo autor

            //console.log(data)
            setAutores(data)// El listado de los autores se envia al estado llamado Autores
        }
        catch(error){
            alert(error)
            console.log(error)
        }
    }


    return(

        <div className="bg-danger pb-5" style={{height: "100vh"}}>
            
            <div>
                <h1 className="text-white text-center pt-3">Tienda de Celulares</h1>
                
                <Link to={"/celularesFORM"} className="btn btn-dark btn-lg rounded-0 rounded-end-4">Ingresar nuevo registro</Link>
                <h3 className="text-white text-center mt-4">Consultar Inventario</h3>
            </div>
            <div className="col-md-10 mx-auto mt-4">
            <div >
           

            {
                autores === undefined ?
                    <div>
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Cargando Datos..</span>
                            
                        </div>
                        <h1>Cargando</h1>
                    </div>
                :
                <Tabla controlador={"autores"} list={autores} cols={["CelularId", "Marca", "Modelo", "Color", "Precio", "Descripcion", "Operadora", "Operaciones"]} />
            }
                                 {/* <th scope="col">celularId</th>
                                <th scope="col">marca</th>
                                <th scope="col">modelo</th>
                                <th scope="col">color</th>
                                <th scope="col">precio</th>
                                <th scope="col">precio</th>
                                <th scope="col">descripcion</th>
                                <th scope="col">operadora</th>   */}
                          
                      
            </div>
            </div>
        </div>
    )
        
}

export default CelularesCRUD