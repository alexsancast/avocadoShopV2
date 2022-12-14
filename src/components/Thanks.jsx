import React from "react";
import "../assets/sass/thanks.scss";
import { ThreeDots } from "react-loader-spinner";
import { useState } from "react";
import { useEffect } from "react";
import avoHappy from "../../public/avoFunny.jpg";


function Thanks() {
  const [state, setState] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setState(false);
    }, 3000);
  }, []);

  return (
    <div className="container__thanks">
      {state ? (
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
      ) : (
        <div>
          <img src={avoHappy} alt="" />
          {" "}
          <h1>Thanks for the purchase </h1>{" "}
        </div>
      )}
    </div>
  );
}

export default Thanks;
