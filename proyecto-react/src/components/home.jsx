import React from "react";

function Home(){

    return(
        <div  className=" m-0 p-0"style={{ display: "flex", height: "100vh"}}>
            <div className="bg-danger d-inline-block w-50 position-relative m-0 p-0" style={{height: "100%"}}>
                <div className="position-relative top-50 start-50 translate-middle text-center">
                    <h1 className="text-white ">Tienda de Celulares</h1>
                    <button className="btn btn-dark mt-5">Ir a la Tienda</button>
                </div>
                
            </div>
            
            <div className="bg-dark d-inline-block w-50 position-relative m-0 p-0" style={{height: "100%"}}>
                <div className="position-relative top-50 start-50 translate-middle text-center">
                    <h1 className="text-white ">Tienda de Video Juegos</h1>
                    <button className="btn btn-danger mt-5">Ir a la Tienda</button>
                </div> 
            </div>
        </div>
        
    )
}

export default Home