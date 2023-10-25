import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function CelularesFORM({api, del}){

    const[marca, setMarca] = useState("")
    const[modelo, setModelo] = useState ("")
    const[color, setColor] = useState("")
    const[descripcion, setDescripcion] = useState("")
    const[precio, setPrecio] = useState("")
    const[operadora, setOperadora] = useState("")

    const { id } = useParams()

    const navigate = useNavigate()

    useEffect(() => {
        if (id !== undefined) {
            cargarCelular()
        }
    }, [])

    async function cargarCelular() {
        try {
            let res = await axios(api + "/" + id)
            let data = await res.data

            setMarca(data.marca)
            setModelo(data.modelo)
            setColor(data.color)
            setDescripcion(data.descripcion)
            setPrecio(data.precio)
            setOperadora(data.operadora)
        } catch (error) {
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
            let celular = {
                marca: marca,
                modelo: modelo,
                color: color,
                descripcion: descripcion,
                precio: precio,
                operadora: operadora
            }

            let res = await axios.post(api, celular)
            let data = await res.data

            if (data.status === 1) {
                alert(data.message)
                navigate("/celulares")
            }
        } catch (error) {
            alert(error)
            console.log(error)
        }

    }

    async function editar() {
        try {
            let celular = {
                celularId: id,
                marca: marca,
                modelo: modelo,
                color: color,
                descripcion: descripcion,
                precio: precio,
                operadora: operadora
            }

            let res = await axios.put(api, celular)
            let data = await res.data 

            if (data === 1) {
                alert(data.message)
                navigate("/celulares")
            }
        } catch (error) {
            if (error.response.status === 500) {
                alert("El registro ya no existe")
                navigate("/celulares")
            }
            else {
                alert(error)
                console.log(error)
            }
        }
    }

    async function eliminar() {
        try {
            let res = await axios.delete(api + "?id=" + id)
            let data = await res.data

            if (data.status === 1) {
                alert(data.message)
                navigate("/celulares")
            }
        } catch (error) {
            if (error.response.status === 404) {
                alert("El autor ya no existe")
                navigate("/celulares")
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
            else if (del === undefined){
                let respuesta = window.confirm("Esta seguro que desea editar?") // Solicitamos confirmacion del usuario
                if (respuesta === true) //verificamos la respuesta
                editar()
            } // Si del es undefined significa que desea editar
                
            else {//se desea eliminar
                let respuesta = window.confirm("Esta seguro que desea eliminar?") // Solicitamos confirmacion del usuario
                if (respuesta === true) //verificamos la respuesta
                    eliminar() //Si la respuesta es true entonces invocamos eliminar()
            }
        } 
    }

    return(
        <div className="bg-danger pb-5" style={{height:"100%", display: "flex", flexDirection: "column", margin: "0"}}>
            
            <div>
               
                <h1 className="text-white text-center pt-3 ">Tienda de Celulares</h1>
                <Link to={"/celulares"} className="btn btn-dark btn-lg rounded-0 rounded-end-4">Ir a Tienda de Celulares</Link>
                <h3 className="text-white text-center mt-4 mb-3">Ingreso de Inventario</h3>
            </div>

            <form className="needs-validation" noValidate>
                <div className="bg-dark position-relative pt-4 rounded-3 mb-2" style={{height: "100%", width: "55%", marginLeft: "22%"}} >
                    {
                        id !== undefined ?
                        <div className="form-floating pt-3 ms-5 me-5 ps-5 pe-5">
                            <input type="text" className="form-control" value={id} readOnly disabled/>
                            <label htmlFor="" className="text-black ms-5" >ID:</label>
                        </div>
                        :
                            ""
                    }
                     <div className="d-inline-block w-50 position-relative text-center ">
                        <div className="form-floating m-3">
                            <input type="text" className="form-control" onChange={(e) => setMarca(e.target.value)} disabled={del === undefined ? false : true} value={marca} required/>
                            <label htmlFor="" className="text-black">Marca:</label>
                            <div className="valid-feedback">Ok</div>
                            <div className="invalid-feedback">Campo requerido</div>
                        </div>                        

                        <div className="form-floating m-3">
                            <input type="text" className="form-control" onChange={(e) => setModelo(e.target.value)} disabled={del === undefined ? false : true} value={modelo} required/>
                            <label htmlFor="" className="text-black" >Modelo:</label>
                            <div className="valid-feedback">Ok</div>
                            <div className="invalid-feedback">Campo requerido</div>
                        </div>                        

                        <div className="form-floating m-3">
                            <input type="text" className="form-control" onChange={(e) => setColor(e.target.value)} disabled={del === undefined ? false : true} value={color} required/>
                            <label htmlFor="" className="text-black" >Color:</label>
                            <div className="valid-feedback">Ok</div>
                            <div className="invalid-feedback">Campo requerido</div>
                        </div>
                            <button className={`btn btn-danger mb-4`} onClick={(e) => enviar(e)}>{id === undefined ? "Agregar" : del === undefined ? "Editar" : "Eliminar"}</button>
                        </div>
                        
                        <div className="d-inline-block w-50 position-relative text-center ">
                            <div className="form-floating m-3">
                            <input type="text" className="form-control" onChange={(e) => setDescripcion(e.target.value)} disabled={del === undefined ? false : true} value={descripcion} required />
                                <label htmlFor="" className="text-black" >Descripcion:</label>
                                <div className="valid-feedback">Ok</div>
                                <div className="invalid-feedback">Campo requerido</div>
                            </div>
                            
                            <div className="form-floating m-3">
                            <input type="text" className="form-control" onChange={(e) => setPrecio(e.target.value)} disabled={del === undefined ? false : true} value={precio} required/>
                                <label htmlFor="" className="text-black" >Precio:</label>
                                <div className="valid-feedback">Ok</div>
                                <div className="invalid-feedback">Campo requerido</div>
                            </div>
                            
                            <div className="form-floating m-3">
                            <input type="text" className="form-control" onChange={(e) => setOperadora(e.target.value)} disabled={del === undefined ? false : true} value={operadora} required/>
                                <label htmlFor="" className="text-black" >Operadora:</label>
                                <div className="valid-feedback">Ok</div>
                                <div className="invalid-feedback">Campo requerido</div>
                            </div>
                            

                            <button className="btn btn-danger mb-4" onClick={() => navigate("/celulares")}>Cancelar</button>
                        </div>
                </div>
            </form>
        </div>
    )
}

export default CelularesFORM