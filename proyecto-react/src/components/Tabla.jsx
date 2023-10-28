import React from "react";
import { Link } from "react-router-dom";


function Tabla({cols, list, controlador}){
    console.log("cols", cols)
    console.log("list", list)
    console.log("controlador", controlador)

    return(
        <div className="table-responsive " > 
            <table className="table table-striped ">
                <thead>
                    <tr>
                        {
       
                            cols.map((value, index) => {
                                return <th key={index}>{value}</th>
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                        {

                            list.map((item, index) =>{
                                return <tr key={index}>
                                   
                                    {
  
                                        Object.values(item).map((value, index2) =>{
                                            return <td key={index2}>{value}</td>
                                        })
                                    }
                                     <td>{}
                                        <div className="d-inline-flex gap-1">
                                            <Link to={`/${controlador}/delete/${Object.values(item)[0]}`} className="btn btn-danger d-inline-flex gap-1"><i className="fa-solid fa-trash bi bi-trash3 "></i> Eliminar</Link>
                                        <Link to={`/${controlador}/edit/${Object.values(item)[0]}`} className="btn btn-secondary d-inline-flex gap-1"><i className="fa-solid fa-pen-to-square bi bi-pencil"></i> Editar</Link>
                                        </div>
                                    </td>
                                </tr>
                            })
                        }
                        
                </tbody>
               
            </table>
        </div>
    )
}

export default Tabla