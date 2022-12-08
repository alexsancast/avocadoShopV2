import React from "react";
import "../assets/sass/home.scss";
import { NavLink } from "react-router-dom";
import { useRef } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function Avocado({ avocado, addToCart }) {
  const ref = useRef(null);
  const onPressBnt = () => {
    addToCart();
  };
  return (
    <>
      <NavLink to={`/details/` + avocado.id}>
        <img src={`https://platzi-avo.vercel.app/${avocado.image}`} alt="" />
        <h1>{avocado.name}</h1>
        <p>{avocado.attributes.description}</p>
        <h2> $ {avocado.price}</h2>
      </NavLink>

      <button onClick={onPressBnt} id={avocado.id} key={avocado.id} ref={ref}>
        <AiOutlineShoppingCart size="1em" /> Add
      </button>
    </>
  );
}
