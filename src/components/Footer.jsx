import React from "react";
import "../assets/sass/footer.scss";

function Footer() {
  return (
    <div className="container__footer">
      <div className="container__footer_direcciones">
        <div className="container__footer_img_title">
          <img
            className="footer_direciones_img"
            src="/src/assets/img/footer/aguacate.png"
            alt=""
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
          <img src="/src/assets/img/footer/facebook.png" alt="" />
          <img src="/src/assets/img/footer/instagram.png" alt="" />
          <img src="/src/assets/img/footer/twitter.png" alt="" />
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
