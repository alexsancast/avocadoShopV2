import React from "react";
import { NavLink } from "react-router-dom";
import "../assets/sass/navbar.scss";
import {
  IoChatbubbleEllipsesOutline,
  IoShirtOutline,
  IoLocationOutline,
} from "react-icons/io5";
import avo from "../../public/aguacate.png";


function Slidebar() {
  return (
    <div className="container__slidebar">
      <li>
        {" "}
        <img src={avo} alt="" />
      </li>
      <li>
        {" "}
        <NavLink to="/aboutme">
          {" "}
          <IoShirtOutline /> About me{" "}
        </NavLink>{" "}
      </li>
      <li>
        <NavLink to="/location">
          {" "}
          <IoLocationOutline /> Location{" "}
        </NavLink>
      </li>
      <li>
        <NavLink to="/support">
          <IoChatbubbleEllipsesOutline /> Support
        </NavLink>
      </li>
    </div>
  );
}

export default Slidebar;
