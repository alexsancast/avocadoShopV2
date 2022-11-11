import React from "react";

import Avocado from "./Avocado";
import "../assets/sass/home.scss";

export default function Home({ avocados, value }) {
  return (
    <div className="container__avocados">
      {value ? (
        <>
          {avocados.map((avocado) => {
            return (
              <div className="card__avocado" key={avocado.id}>
                <Avocado avocado={avocado} />
              </div>
            );
          })}{" "}
        </>
      ) : (
        <div>No hya datos</div>
      )}
    </div>
  );
}
