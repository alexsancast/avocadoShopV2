import React from "react";
import "../assets/sass/navbar.scss";

function Backdrop({slidebar}) {
  return (
    <div className={slidebar ? "backdrop backdrop-open" : "backdrop"}></div>
  );
}

export default Backdrop;
