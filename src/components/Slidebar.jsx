import React from "react";
import { NavLink } from "react-router-dom";
import "../assets/sass/navbar.scss";

function Slidebar({ slidebar }) {
  return (
    <div
      className={
        slidebar ? "container__slidebar slidebar-open" : "container__slidebar"
      }
    >
  
      <li>
        {" "}
        <NavLink className="a" to="/aboutme">About me</NavLink>{" "}
      </li>
      <li>
        <NavLink className="a" to="/location">Location</NavLink>
      </li>
      <li>
        <NavLink className="a" to="/support">Support</NavLink>
      </li>
    </div>
  );
}

export default Slidebar;
