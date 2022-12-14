import React from "react";
import { useEffect } from "react";
import Avocado from "./Avocado";
import "../assets/sass/home.scss";
// import ClipLoader from "react-spinners/ClipLoader";
// import * as ReactBootStrap from "react-bootstrap";
import { ThreeDots } from "react-loader-spinner";
import avo from "../../public/sadAvo.jpg";

export default function Home({
  avocados,
  value,
  isLoading,
  addAmount,
  getSubTotal,
  notify,
  slidePreview,
  slideBasket,
  setSlidebar,
  setDisableSearch,
  setSlideProfile
}) {
  useEffect(() => {
    slideBasket ? slidePreview() : (slideBasket = false);
    setSlidebar(false);
    setDisableSearch(true);
    setSlideProfile(false);
  }, []);

  const addToCart = (id) => {
    const avocado = avocados.find((avo) => avo.id == id);
    let avo = [];
    if (sessionStorage.getItem("cart") == null) {
      avo.push({ ...avocado, quantity: 1 });
      sessionStorage.setItem("cart", JSON.stringify(avo));
    } else {
      const datavo = JSON.parse(sessionStorage.getItem("cart"));
      const existing = datavo.some((avo) => avo.id == id);
      if (existing) {
        datavo.find((avo) => avo.id === id).quantity += 1;
        console.log(datavo);
        sessionStorage.setItem("cart", JSON.stringify(datavo));
      } else {
        datavo.push({ ...avocado, quantity: +1 });
        sessionStorage.setItem("cart", JSON.stringify(datavo));
      }
    }

    addAmount();
    getSubTotal();
    notify();
  };
  return (
    <div className="container__avocados">
      {value ? (
        <>
          {isLoading ? (
            <div className="container__loader">
              <ThreeDots
                height="80"
                width="80"
                radius="9"
                color="#4fa94d"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
              />
            </div>
          ) : (
            <>
              {avocados.map((avocado) => {
                return (
                  <div key={avocado.id} className="card__avocado">
                    <Avocado avocado={avocado} addToCart={addToCart} />
                  </div>
                );
              })}
            </>
          )}{" "}
        </>
      ) : (
        <div className="container__fail">
          <img src={avo} alt="" />
          <h1>There is not results</h1>
          </div>
      )}
    </div>
  );
}
