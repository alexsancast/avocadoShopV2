import React from "react";
import "../assets/sass/home.scss";

import { AiOutlineShoppingCart } from "react-icons/ai";

export default function Avocado({ avocado }) {
  return (
    <>
      <img src={`https://platzi-avo.vercel.app/${avocado.image}`} alt="" />
      <h1>{avocado.name}</h1>
      <p>{avocado.attributes.description}</p>
      <h2>{avocado.price}</h2>
      <button>
        <AiOutlineShoppingCart size="1em" /> Add
      </button>
    </>
  );
}
