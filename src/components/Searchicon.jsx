import React from "react";
import "../assets/sass/searchicon.scss";

export default function Searchicon({ slideSearch , findAvocado }) {
    const handleInput = (e) => {
        findAvocado(e.target.value);
      };
  return (
    <div
      className={
        slideSearch
          ? "container__searchicon search-open "
          : "container__searchicon"
      }
    >
      <input onChange={handleInput} className="search_input" type="text" />
    </div>
  );
}
