import "../assets/sass/checkout.scss";
import React from "react";

function Checkout() {
  const data = JSON.parse(sessionStorage.getItem("cart"));
  return (
    <div className="container__checkout">
      {data.map((avo) => {
        return (
          <div className="checkout__avo">
            <img src={`https://platzi-avo.vercel.app/${avo.image}`} alt="" />
            <h3>{avo.name}</h3>
            <p>${avo.price}</p>
            <p>X{avo.quantity}</p>
            
          </div>
        );
      })}

      <div className="checkout__subtotal">
        <h1>aqui el subtotal</h1>
      </div>
    </div>
  );
}

export default Checkout;
