import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";


function VideoJuegosFORM({api2, del}){

    const[titulo, setTitulo] = useState("")
    const[descripcion, setDescripcion] = useState("")
    const[plataforma, setPlataforma] = useState("")
    const[precio, setPrecio] = useState("")
    const[categoria, setCategoria] = useState("")

    const { id } = useParams()

    const navigate = useNavigate()

    useEffect(() => {
        if (id !== undefined) {
            cargarCelular()
        }
    }, [])

    async function cargarCelular() {
        try {
            let res = await axios(api2 + "/" + id)
            let data = await res.data

            setTitulo(data.titulo)
            setDescripcion(data.descripcion)
            setPlataforma(data.plataforma)
            setPrecio(data.precio)
            setCategoria(data.categoria)
        } 
        catch (error) {
            if (error.response.status === 404) {
                alert("El registro no existe")
                navigate("/celulares")
            }
            else {
                alert(error)
                console.log(error)
            }
        }
    }
    
    async function guardar() {
        try {
            let Juego = {
                titulo: titulo,
                descripcion: descripcion,
                plataforma: plataforma,
                precio: precio,
                categoria: categoria
            }

            let res = await axios.post(api2, Juego)
            let data = await res.data

            if (data.status === 1) {
                alert(data.message)
                navigate("/viedeoJuegos")
            }
        } catch (error) {
            alert(error)
            console.log(error)
        }
    }

    async function editar() {
        try {
            let celular = {
                juegoId: id,
                titulo: titulo,
                descripcion: descripcion,
                plataforma: plataforma,
                precio: precio,
                categoria: categoria
            }

            let res = await axios.put(api2, celular)
            let data = await res.data 

            if (data === 1) {
                alert(data.message)
                navigate("/viedeoJuegos")
            }
        } catch (error) {
            if (error.response.status === 500) {
                alert("El registro ya no existe")
                navigate("/viedeoJuegos")
            }
            else {
                alert(error)
                console.log(error)
            }
        }
    }

    async function eliminar() {
        try {
            let res = await axios.delete(api2 + "?id=" + id)
            let data = await res.data

            if (data.status === 1) {
                alert(data.message)
                navigate("/viedeoJuegos")
            }
        } catch (error) {
            if (error.response.status === 404) {
                alert("El autor ya no existe")
                navigate("/viedeoJuegos")
            }
            else {
                alert(error)
                console.log(error)
            }
        }
    }




    function enviar(event){
        event.preventDefault()
        event.stopPropagation()

        let form = document.querySelector(".needs-validation")

        if(!form.checkValidity()){
            form.classList.add("was-validated")
        }
        else{
            // Significa que el formulario tienen todos los campos completos
            // Por lo cual procedemos a ejecutar la accion (guardar, editar, eliminar)
            if (id === undefined) // Si el id es undefined significa que es un nuevo registro
                guardar() //Invoca a la funcion guardar()
            else if (del === undefined) // Si del es undefined significa que desea editar
                editar()
            else {//se desea eliminar
                let respuesta = window.confirm("Esta seguro que desea eliminar?") // Solicitamos confirmacion del usuario
                if (respuesta === true) //verificamos la respuesta
                    eliminar() //Si la respuesta es true entonces invocamos eliminar()
            }
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

                    
                     <div className="d-inline-block w-50 position-relative text-center ">
                        <div className="form-floating m-3">
                            <input type="text" className="form-control" value={id} readOnly disabled/>
                            <label htmlFor="" className="text-black ">ID:</label>
                        </div>

                        <div className="form-floating m-3">
                            <input type="text" className="form-control" onChange={(e) => setTitulo(e.target.value)} disabled={del === undefined ? false : true} value={titulo} required/>
                            <label htmlFor="" className="text-black">Titulo:</label>
                            <div className="valid-feedback">Ok</div>
                            <div className="invalid-feedback">Campo requerido</div>
                        </div>                        

                        <div className="form-floating m-3">
                            <input type="text" className="form-control" onChange={(e) => setDescripcion(e.target.value)} disabled={del === undefined ? false : true} value={descripcion} required/>
                            <label htmlFor="" className="text-black">Descripcion:</label>
                            <div className="valid-feedback">Ok</div>
                            <div className="invalid-feedback">Campo requerido</div>
                        </div>                        

                            <button className="btn btn-danger mb-4" onClick={(event) => enviar(event)}>{id === undefined ? "Agregar" : del === undefined ? "Editar" : "Eliminar"}</button>
                        </div>
                        
                        <div className="d-inline-block w-50 position-relative text-center ">
                            <div className="form-floating m-3">
                                <input type="text" className="form-control" onChange={(e) => setPlataforma(e.target.value)} disabled={del === undefined ? false : true} value={plataforma} required/>
                                <label htmlFor="" className="text-black">Plataforma:</label>
                                <div className="valid-feedback">Ok</div>
                                <div className="invalid-feedback">Campo requerido</div>
                            </div>

                            <div className="form-floating m-3">
                                <input type="text" className="form-control" onChange={(e) => setPrecio(e.target.value)} disabled={del === undefined ? false : true} value={precio} required/>
                                <label htmlFor="" className="text-black">Precio:</label>
                                <div className="valid-feedback">Ok</div>
                                <div className="invalid-feedback">Campo requerido</div>
                            </div>
                            
                            <div className="form-floating m-3">
                                <input type="text" className="form-control" onChange={(e) => setCategoria(e.target.value)} disabled={del === undefined ? false : true} value={categoria} required/>
                                <label htmlFor="" className="text-black">Categoria:</label>
                                <div className="valid-feedback">Ok</div>
                                <div className="invalid-feedback">Campo requerido</div>
                            </div>

                            <button className="btn btn-danger mb-4" onClick={() => navigate("/viedeoJuegos")}>Cancelar</button>
                        </div>
                </div>
            </form>
        </div>
    )
}

export default VideoJuegosFORM;
