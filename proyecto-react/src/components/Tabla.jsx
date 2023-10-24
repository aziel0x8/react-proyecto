import React from "react";
import { Link } from "react-router-dom";


function Tabla({cols, list, controlador}){
    console.log("cols", cols)
    console.log("list", list)
    console.log("controlador", controlador)

    return(
        <div>
            <table className="table table-striped">
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
                                        <Link to={`/${controlador}/edit/${Object.values(item)[0]}`} className="btn btn-primary m-2"><i className="fa-solid fa-pen-to-square"></i> Editar</Link>
                                        <Link  to={`/${controlador}/delete/${Object.values(item)[0]}`} className="btn btn-danger"><i className="fa-solid fa-trash"></i> Eliminar</Link>
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