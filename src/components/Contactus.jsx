import React from "react";
import "../assets/sass/contactus.scss";
//imagenes
import submit from "../../public/submit3.jpg"

function Contactus() {
  return (
    <div className="container__contactus">
      <div className="contactus_img">
        <img src={submit} alt="" />
      </div>

      <form className="contactus_form" action="">
        <h1>Send us a Message</h1>
        <input className="contactus_input" placeholder="Name" type="text" />
        <input className="contactus_input" placeholder="Email" type="text" />
        <textarea className="contactus_text">
          Escribe tu comentario....
        </textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contactus;
