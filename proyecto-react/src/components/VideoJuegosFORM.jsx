import React, {useState} from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function VideoJuegosFORM({api}){

    const[juegoID, setJuegoID] = useState("")
    const[titulo, setTitulo] = useState("")
    const[descripcion, setDescripcion] = useState("")
    const[plataforma, setPlataforma] = useState("")
    const[precio, setPrecio] = useState("")
    const[categoria, setCategoria] = useState("")

    const navigate = useNavigate()

    function enviar(event){
        event.preventDefault()
        event.stopPropagation()

        let form = document.querySelector(".needs-validation")

        if(!form.checkValidity()){
            form.classList.add("was-validated")
        }
        else{
            alert("Pasó la validacion")
        } 
    }

    return(
        <div className="bg-danger pb-5" style={{height: "100%"}}>
            
            <div>
                <h1 className="text-white text-center pt-3 ">Tienda de Videojuegos</h1>
                <Link to={"/viedeoJuegos"} className="btn btn-dark btn-lg rounded-0 rounded-end-4">Ir a Tienda de Videojuegos</Link>
                <h3 className="text-white text-center mt-4 mb-3">Ingreso de Inventario</h3>
            </div>

            <form className="needs-validation" noValidate>
                <div className="bg-dark position-relative pt-4 rounded-3 mb-2" style={{height: "100%", width: "55%", marginLeft: "22%"}} >

                    <div className="form-floating pt-3 ms-5 me-5 ps-5 pe-5">
                        <input type="text" className="form-control" onChange={(e) => setJuegoID(e.target.value)} value={juegoID} required />
                        <label htmlFor="" className="text-black ms-5">JuegoID:</label>
                        <div className="valid-feedback">Ok</div>
                        <div className="invalid-feedback">Campo requerido</div>
                    </div>

                     <div className="d-inline-block w-50 position-relative text-center ">
                        <div className="form-floating m-3">
                            <input type="text" className="form-control" onChange={(e) => setTitulo(e.target.value)} value={titulo} required/>
                            <label htmlFor="" className="text-black">Titulo:</label>
                            <div className="valid-feedback">Ok</div>
                            <div className="invalid-feedback">Campo requerido</div>
                        </div>                        

                        <div className="form-floating m-3">
                            <input type="text" className="form-control" onChange={(e) => setDescripcion(e.target.value)} value={descripcion} required/>
                            <label htmlFor="" className="text-black">Descripcion:</label>
                            <div className="valid-feedback">Ok</div>
                            <div className="invalid-feedback">Campo requerido</div>
                        </div>                        

                        <div className="form-floating m-3">
                            <input type="text" className="form-control" onChange={(e) => setPlataforma(e.target.value)} value={plataforma} required/>
                            <label htmlFor="" className="text-black">Plataforma:</label>
                            <div className="valid-feedback">Ok</div>
                            <div className="invalid-feedback">Campo requerido</div>
                        </div>
                        {
                        //<button className={`btn btn-danger`} onClick={(e) => enviar(e)}>{id === undefined ? "Agregar" : del === undefined ? "Editar" : "Eliminar"}</button>
                        }
                            <button className="btn btn-danger mb-4" onClick={(event) => enviar(event)}>Agregar</button>
                        </div>
                        
                        <div className="d-inline-block w-50 position-relative text-center ">
                            <div className="form-floating m-3">
                                <input type="text" className="form-control" onChange={(e) => setPrecio(e.target.value)} value={precio} required/>
                                <label htmlFor="" className="text-black">Precio:</label>
                                <div className="valid-feedback">Ok</div>
                                <div className="invalid-feedback">Campo requerido</div>
                            </div>
                            
                            <div className="form-floating m-3">
                                <input type="text" className="form-control" onChange={(e) => setCategoria(e.target.value)} value={categoria} required/>
                                <label htmlFor="" className="text-black">Categoria:</label>
                                <div className="valid-feedback">Ok</div>
                                <div className="invalid-feedback">Campo requerido</div>
                            </div>

                            <button className="btn btn-danger mb-4" onClick={() => navigate("/videojuegos")}>Cancelar</button>
                        </div>
                </div>
            </form>
        </div>
    )
}

export default VideoJuegosFORM;
