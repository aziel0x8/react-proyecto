import React, {useEffect, useState} from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

function VideoJuegosFORM({api, del}){

    /*
    // Son estados asociados a los campos del formulario
    const [titulo, setTItulo] = useState("")
    const [descripcion, setDescripcion] = useState("")
    const [plataforma, setPlataforma] = useState("")
    const [precio, setPrecio] = useState("")
    const [categoria, setCategoria] = useState("")

    // id: el parametro id recibido desde el CRUD
    const { id } = useParams()

    // navigate es el nombre con el cual voy a invocar a la funcion que haga la redireccion
    const navigate = useNavigate()

    useEffect(() => {
        // Este if sirve para verificar si se deben cargar los datos en el formulario
        if (id !== undefined) {
            cargarAutor() // Invoca a la funcion cargar autor
        }
    }, [])

    // La funcion encargada de cargar los datos del autor para los casos de editar y eliminar
    async function cargarAutor() {
        try {
            let res = await axios(api + "/" + id) //Solicitud GET con parametro ID
            let data = await res.data //Convierte el resultado a objeto

            //Los datos devueltos por la API se asignan a los respectivos estados
            //Para que en el formulario se carguen dichos datos
            setTItulo(data.titulo)
            setDescripcion(data.descripcion)
            setPlataforma(data.plataforma)
            setPrecio(data.precio)
            setCategoria(data.categoria)
        } catch (error) {
            //verifica si el error es 404 lo que significa que el id del autor no existe
            if (error.response.status === 404) {
                alert("El registro no existe")
                navigate("/autores")
            }
            else {
                alert(error)
                console.log(error)
            }
        }
    }

    // funcion asincrona para guardar un nuevo registro
    async function guardar() {
        try {
            // creacion del objeto autor el cual posteriormente se le enviara a la API
            let autor = {
                titulo: titulo,
                descripcion: descripcion,
                plataforma: plataforma,
                precio: precio,
                categoria: categoria
            }

            //solicitud POST hacia la API
            let res = await axios.post(api, autor)
            let data = await res.data

            //verifica si la API respondio en status con el valor de 1
            if (data.status === 1) {
                alert(data.message)// Muestra el mensaje devuelto por la API
                navigate("/autores")// Redirecciona el componente donde se muestra la tabla de autores
            }
        } catch (error) {
            alert(error)
            console.log(error)
        }

    }

    //Funcion encargada de editar al autor
    async function editar() {
        try {
            let autor = {
                autorId: id,
                titulo: titulo,
                descripcion: descripcion,
                plataforma: plataforma,
                precio: precio,
                categoria: categoria
            }

            //se realiza una solicitud a la API de tipo PUT
            let res = await axios.put(api, autor)
            let data = await res.data //convertimos la respuesta a objeto

            //verificamos si la api devolvio status 1
            if (data === 1) {
                alert(data.message)  //Mostramos el mensaje de la API
                navigate("/autores") //Redireccionamos a la tabla autores
            }
        } catch (error) {
            //verificamos si la API respondio que no existe
            if (error.response.status === 500) {
                alert("El registro ya no existe")
                navigate("/autores")
            }
            else {
                //si es otro tipo de error mostramos el detalle
                alert(error)
                console.log(error)
            }
        }
    }

    //funcion se encarga de hacer la peticion de tipo DELETE hacia la API
    async function eliminar() {
        try {
            let res = await axios.delete(api + "?id=" + id) //se solicita DELETE
            let data = await res.data //Convertimos el resultado de la API a objeto

            //verfifcamos si la API a devuelto el estado de que fue eliminado
            if (data.status === 1) {
                alert(data.message) //Mostramos el mensaje devuelto por la API
                navigate("/autores") //Redireccionamos hacia la tabla principal de autores
            }
        } catch (error) {
            //verficamos si no existe el id a eliminar
            if (error.response.status === 404) {
                alert("El autor ya no existe") //mostramos mensaje de que no existe
                navigate("/autores") //Redireccionamos hacia la tabla principal de autores
            }
            else {
                //si es otro tipo de error ingresa aqui
                alert(error)
                console.log(error)
            }
        }
    }

    //esta funcion es invocada por el boton guardar, editar o eliminar
    function enviar(e) {

        // Detiene la propagacion del evento submit generada por defecto en el button dado que este se encuetnra dentro de un formulario
        e.preventDefault()
        e.stopPropagation()

        // Seleccionamos el formulario el cual tine la clase needs-validation
        let form = document.querySelector(".needs-validation")

        //veficamos si el formulario es invalido
        if (!form.checkValidity()) {
            //si es invalido agregamos el estilo de la validacion (invalid-feedback)
            form.classList.add('was-validated')
        }
        else {
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
    }*/

    return(
        <div className="bg-dark pb-5" style={{height: "100vh"}}>
            
            <div>
                <h1 className="text-white text-center pt-3">Tienda de Video Juegos</h1>
                <Link to={"/viedeoJuegos"} className="btn btn-danger btn-lg rounded-0 rounded-end-4">Ir a Tienda de Video Juegos</Link>
                <h3 className="text-white text-center mt-4 mb-3">Ingreso de Inventario</h3>
            </div>
            <div className="bg-danger position-relative pt-4 rounded-3" style={{height: "330px", width: "55%", marginLeft: "22%"}} >
                <form className="needs-validation" noValidate>
                    {
                        /*
                        // Se verifica que el id sea diferente de undefined
                        // Si esto es cierto siginifca que se va a editar o eliminar el registro
                        // Por lo cual mostramos el campo autor id
                        id !== undefined ?
                            <div className="form-group mt-3">
                                <label className="form-label">Autor ID:</label>
                                <input className="form-control" type="text" value={id} readOnly disabled />
                            </div>
                            :
                            ""
                    */
                    }
                    <div className="d-inline-block w-50 position-relative text-center ">
                        <div className="form-floating m-3">
                            <input type="text" className="form-control" />
                            <label htmlFor="" className="text-black" >ID:</label>
                        </div>
                        

                        <div className="form-floating m-3">
                            <input type="text" className="form-control"/>
                            <label htmlFor="" className="text-black">Titulo:</label>
                        </div>
                        

                        <div className="form-floating m-3">
                            <input type="text" className="form-control"/>
                            <label htmlFor="" className="text-black">Descripcion:</label>
                        </div>
                        
                        {
                        //<button className={`btn btn-dark`} onClick={(e) => enviar(e)}>{id === undefined ? "Agregar" : del === undefined ? "Editar" : "Eliminar"}</button>
                        }
                        <button className="btn btn-dark">Agregar</button>
                    </div>
                    
                    <div className="d-inline-block w-50 position-relative text-center ">
                        <div className="form-floating m-3">
                            <input type="text" className="form-control" />
                            <label htmlFor="" className="text-black">Plataforma:</label>
                        </div>
                        
                        <div className="form-floating m-3">
                            <input type="text" className="form-control"/>
                            <label htmlFor="" className="text-black">Precio:</label>
                        </div>
                        
                        <div className="form-floating m-3">
                            <input type="text" className="form-control" />
                            <label htmlFor="" className="text-black">Categoria:</label>
                        </div>
                        

                        <button className="btn btn-dark">Cancelar</button>
                    </div>
                </form>
            </div>  
        </div>
    )
}

export default VideoJuegosFORM