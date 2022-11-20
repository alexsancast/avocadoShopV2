import React from "react";
import { NavLink } from "react-router-dom";
import Avocado from "./Avocado";
import "../assets/sass/home.scss";

export default function Home({ avocados, value, isLoading }) {
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
                  <NavLink to={`/details/`+ avocado.id} key= {avocado.id}>
                    <div className="card__avocado" >
                      <Avocado avocado={avocado} />
                    </div>
                  </NavLink>
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
