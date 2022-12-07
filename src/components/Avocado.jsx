import React from "react";
import "../assets/sass/home.scss";
import { NavLink } from "react-router-dom";

import { AiOutlineShoppingCart } from "react-icons/ai";

export default function Avocado({ avocado , addToCart  }) {
  return (
    <>
    <NavLink to={`/details/`+ avocado.id}>
      <img src={`https://platzi-avo.vercel.app/${avocado.image}`} alt="" />
      <h1>{avocado.name}</h1>
      <p>{avocado.attributes.description}</p>
      <h2> $ {avocado.price}</h2>
      </NavLink>

      <button onClick={addToCart} key={avocado.id}>
        <AiOutlineShoppingCart size="1em" /> Add
      </button>
    </>
  );
}
