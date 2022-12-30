import React from "react";
import { useEffect } from "react";
import "../assets/sass/location.scss";
//imagenes
import gif from "../../public/location2.gif";
import location from "../../public/location.png";
import avostore from "../../public/avostore.jpg";

function Location({setSlidebar, setSlideSearch  ,setSlideProfile , setSlideBasket, setDisableSearch}) {
  useEffect(() => {
    setSlideSearch(false);
    setSlidebar(false);
    setDisableSearch(false);
    setSlideBasket(false);
    setSlideProfile(false);
  }, []);
  return (
    <div className="container__location ">
      <div className="container__location_info ">

        <div className="location_title">
          <img src={gif} alt="" />
          <h1>La Romana</h1>
        </div>

        <div className="container__location_addr">
          <div className="location_addr">
            <h2>Hours</h2>
            <p>Mon - Sat 9:00 AM - 8:00 PM</p>
          </div>

          <div className="location_contact">
            <h2>Near Me</h2>
            <p>Behind Commercial P&P</p>
          </div>

          <button>GET DIRECTIONS</button>
        </div>
      </div>

      <div className="container__location_img">
        <img src={avostore} alt="" />
      </div>
    </div>
  );
}

export default Location;
