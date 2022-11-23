import React from "react";
import "../assets/sass/location.scss";
//imagenes
import gif from "../../public/location2.gif";

function Location() {
  return (
    <div className="container__location ">
      <div>
        <img src={gif} alt="" />
        <h1> La Romana</h1>
      </div>

      <div className="main">
        <div className="container__location_info">
          <div className="location__info_gif">
            <div className="location__info_hour_addr">
              <div className="location__info_hour">
                <h2>Hour</h2>
                <p>Mon - Sat 9:00 AM - 8:00 PM</p>
              </div>

              <div className="location__info_addr">
                <h2>Near Me</h2>
                <p>Behind Commercial P&P</p>
              </div>
            </div>
          </div>
        </div>

        <div className="container__location_btn">
          <div>
            <h2>Contact</h2>
            <p>809-813-0337 / 829-406-2976</p>
          </div>

          <div>
            <button>Get directions</button>
          </div>
        </div>

        <div className="container__location_img"></div>
      </div>
    </div>
  );
}

export default Location;
