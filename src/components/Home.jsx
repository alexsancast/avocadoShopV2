import React from "react";

import Avocado from "./Avocado";
import "../assets/sass/home.scss";

export default function Home({avocados}) {



  const filter = () => {
    let datos = avocados.filter((data) => {
      if (data.name.toLowerCase().includes(text.toLowerCase())) {
        return data;
      }
    });
    if (datos.length == 0) {
      valor(false);
    } else {
      valor(true);
    }
    setAvocados(datos);
  };



  return (
    <div className="container__avocados">
      {avocados.map((avocado) => {
        return (
          <div className="card__avocado" key={avocado.id}>
            <Avocado avocado={avocado} />
          </div>
        );
      })}
    </div>
  );
}
