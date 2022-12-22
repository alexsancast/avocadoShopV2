import "../assets/sass/checkout.scss";
import { useEffect } from "react";
import React from "react";
import { TiDelete } from "react-icons/ti";
import { useRef } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Checkout({
  subtotal,
  slidePreview,
  slideBasket,
  addAmount,
  getSubTotal,
}) {
  const ref = useRef(null);
  const [checkout, setCheckout] = useState([]);
  const [value, setValue] = useState();
  const data = JSON.parse(sessionStorage.getItem("cart"));
  const navegate = useNavigate();

  useEffect(() => {
    slideBasket ? slidePreview() : (slideBasket = false);
    setCheckout(data);
    if (data === null || data.length <= 0) {
      setValue(false);
    } else setValue(true);
  }, []);

  const testValue = () => {
    if (data === null || data.length <= 0) {
      setValue(false);
    } else setValue(true);
  };

  const onNavegateBtn = ()=>{
    navegate("/thanks");
    sessionStorage.removeItem('cart');
    addAmount();
    getSubTotal();
    
  }

  const onHandleDelete = (event) => {
    const id = event.currentTarget.id;
    const objItem = data.findIndex((obj) => obj.id === id);
    data.splice(objItem, 1);
    sessionStorage.setItem("cart", JSON.stringify(data));
    addAmount();
    getSubTotal();
    setCheckout(data);
    testValue();
    

    // window.location.href = '/public/checkout.html';
  };
  return (
    <div className="container__checkout">
      {value ? (
        <>
          <div className="checkout__avocados">
            {checkout.map((avo) => {
              return (
                <div key={avo.id} ref={ref} className="checkout__avo">
                  <img
                    src={`https://platzi-avo.vercel.app/${avo.image}`}
                    alt=""
                  />
                  <h3>{avo.name}</h3>
                  <p>${avo.price}</p>
                  <p>X {avo.quantity}</p>
                  <p>${avo.price}</p>
                  <TiDelete
                    id={avo.id}
                    onClick={onHandleDelete}
                    className="checkout__trash"
                  />
                </div>
              );
            })}
          </div>
          <div className="checkout__subtotal">
            <div className="checkout__label">
              <h1>SUBTOTAL :</h1>
              <p>${subtotal}</p>
            </div>

            <div className="checkout__seller">
              <p>Special instructions for seller</p>
              <textarea cols="25" rows="8"></textarea>
            </div>

            <button onClick={onNavegateBtn}>Checkout</button>
          </div>
        </>
      ) : (
        <div>No avocados in the basket </div>
      )}
    </div>
  );
}

export default Checkout;
