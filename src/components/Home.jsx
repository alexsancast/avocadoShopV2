import React from "react";

import Avocado from "./Avocado";
import "../assets/sass/home.scss";

export default function Home({ avocados, value, isLoading , addToCart }) {
  return (
    <div className="container__avocados">
      {value ? (
        <>
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            <>
              {avocados.map((avocado) => {
                return (
                    <div key={avocado.id} className="card__avocado" >
                      <Avocado addToCart = {addToCart}  avocado={avocado} />
                    </div>
                  
                );
              })}
            </>
          )}{" "}
        </>
      ) : (
        <div>There is not results</div>
      )}
    </div>
  );
}
