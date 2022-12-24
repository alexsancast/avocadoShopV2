import React from "react";
import "../assets/sass/navbar.scss";

function Backdrop({ slidebar, toggleSidebar }) {
  return (
    <div
      onClick={toggleSidebar}
      className={slidebar ? "backdrop backdrop-open" : "backdrop"}
    ></div>
  );
}

export default Backdrop;
