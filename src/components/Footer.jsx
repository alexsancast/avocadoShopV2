import React from "react";
import "../assets/sass/footer.scss";
//Imagenes
import twitter from "../../public/twitter.png"
import facebook from "../../public/facebook.png"
import instagram from "../../public/instagram.png"
import avo from "../../public/aguacate.png"

function Footer() {
  return (
    <div className="container__footer">
      <div className="container__footer_direcciones">
        <div className="container__footer_img_title">
          <img
            className="footer_direciones_img"
            src={avo}
            alt="Avocado"
          />
          <h1>Our Shop</h1>
        </div>

        <p> La Romana 22000,DO,</p>
        <p> Ensanche La Hoz</p>
        <p>Online Sales and Shipping</p>
      </div>

      <div className="container__footer_social">
        <h1>Social Media</h1>
        <div className="container__footer_social_img">
          <img src={facebook} alt="" />
          <img src={twitter} alt="" />
          <img src={instagram} alt="" />
        </div>
      </div>

      <div className="container__footer_contact">
        <h1>Contact Us</h1>
        <p>alexsancastg@gmail.com </p>
        <p> 809-813-0337 / 829-406-2976</p>
      </div>
    </div>
  );
}

export default Footer;
