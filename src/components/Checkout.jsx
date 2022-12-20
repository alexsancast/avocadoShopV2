import "../assets/sass/checkout.scss";
import { useEffect } from "react";
import React from "react";
import { TiDelete } from "react-icons/ti";
import { useRef } from "react";

function Checkout({subtotal , slidePreview , slideBasket}) {
  const ref = useRef();
  const data = JSON.parse(sessionStorage.getItem("cart"));

 
  useEffect(() => {
    
    slideBasket ? slidePreview() : (slideBasket = false);
  }, []);
  
  const onHandleDelete = () => {
    // const id = e.target.dataset.id;
    // const objItem = item.findIndex(obj=> obj.id === id);
    // item.splice(objItem,1);
    // localStorage.setItem('cart', JSON.stringify(item));
    // window.location.href = '/public/checkout.html';
    console.log(ref.current.id);
  }
  return (
    <div className="container__checkout">
      <div className="checkout__avocados">
        {data.map((avo) => {
          return (
            <div className="checkout__avo"  onClick={onHandleDelete} ref={ref} id={avo.id}>
              <img src={`https://platzi-avo.vercel.app/${avo.image}`} alt="" />
              <h3>{avo.name}</h3>
              <p>${avo.price}</p>
              <p>X {avo.quantity}</p>
              <p>${avo.price}</p>
              <TiDelete  className="checkout__trash" />
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

        <button>Checkout</button>
      </div>
    </div>
  );
}

export default Checkout;
