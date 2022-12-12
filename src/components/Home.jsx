import React from "react";
import Avocado from "./Avocado";
import "../assets/sass/home.scss";

export default function Home({ avocados, value, isLoading , addAmount , getSubTotal  }) {

  const addToCart = (id)=>{
    const avocado = avocados.find((avo) => avo.id == id);
    let avo = [];
    if (sessionStorage.getItem("cart") == null) {
      avo.push({ ...avocado, quantity: 1 });
      sessionStorage.setItem("cart", JSON.stringify(avo));
    } else {
      const datavo = JSON.parse(sessionStorage.getItem("cart"));
      const existing = datavo.some((avo) => avo.id == id);
      if (existing) {
        datavo.find((avo) => avo.id === id).quantity += 1;
        console.log(datavo);
        sessionStorage.setItem("cart", JSON.stringify(datavo));
      } else {
        datavo.push({ ...avocado, quantity: + 1 });
        sessionStorage.setItem("cart", JSON.stringify(datavo));
      }
    }

    addAmount();
    getSubTotal();

  };
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
                      <Avocado avocado={avocado} addToCart = {addToCart}   />
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
