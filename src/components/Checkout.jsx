import "../assets/sass/checkout.scss";
import React from "react";
import { TiDelete } from "react-icons/ti";

function Checkout({subtotal}) {
  const data = JSON.parse(sessionStorage.getItem("cart"));
  return (
    <div className="container__checkout">
      <div className="checkout__avocados">
        {data.map((avo) => {
          return (
            <div className="checkout__avo" key={avo.id} id={avo.id}>
              <img src={`https://platzi-avo.vercel.app/${avo.image}`} alt="" />
              <h3>{avo.name}</h3>
              <p>${avo.price}</p>
              <p>X {avo.quantity}</p>
              <p>${avo.price}</p>
              <TiDelete className="checkout__trash" />
            </div>
          );
        })}
      </div>
      <div className="checkout__subtotal">
        <div className="checkout__label">
          <h1>SUBTOTAL :</h1>
          <p>{subtotal}</p>
        </div>

        <div className="checkout__seller">
          <p>Special instructions for seller</p>
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </div>

        <button>Checkout</button>
      </div>
    </div>
  );
}

export default Checkout;
