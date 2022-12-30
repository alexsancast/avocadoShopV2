import React from "react";
import { useEffect } from "react";
import "../assets/sass/aboutme.scss";
import alex from "../../public/cast.jpg";

function Aboutme({ setSlidebar, setSlideSearch, slidePreview, setSlideBasket , setDisableSearch }) {
  useEffect(() => {
    setSlideSearch(false);
    setSlidebar(false);
    setDisableSearch(false);
    setSlideBasket(false);
  }, []);
  return (
    <div className="container__aboutme">
      <div className="container__aboutme_info">
        <div className="aboutme__img">
          <img src={alex} alt="" />
        </div>
        <div className="aboutme__info">
          <h1>Alexander Castillo</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum,
            dolorem! Tempore, corporis pariatur eveniet ea quam esse nemo v
            oluptatem sed magnam ducimus, inventore illum commodi, vel dolor
            reiciendis natus accusantium!
          </p>
          <p>
            My portafolio is <a href="https://alexsancast.github.io/">here !</a>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Aboutme;
