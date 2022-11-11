import React from "react";

import Avocado from "./Avocado";
import "../assets/sass/home.scss";

export default function Home({ avocados, value , isLoading }) {

  return (
    <div className="container__avocados">
      {value ? (
        <>

         {isLoading ? <div>...Cargando</div> :
         <>
         
         {avocados.map((avocado) => {
           
           return (
             <div className="card__avocado" key={avocado.id}>
               <Avocado avocado={avocado} />
             </div>
           );
         })}</>
         }
        {" "}
        </>
      ) : (
        <div>No hay resultado en la busqueda</div>
      )}
    </div>
  );
}
