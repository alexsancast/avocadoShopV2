import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../assets/sass/detail.scss";
import { AiOutlineShoppingCart } from "react-icons/ai";

function Details() {
  const [avocado, setAvocado] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    async function getData() {
      const getApi = await fetch(
        `https://platzi-avo.vercel.app/api/avo/${params.id}`
      );
      const data = await getApi.json();
      setAvocado(data);
      setisLoading(false);
    }

    getData();
  }, []);

  return (
    <div className="container_details">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="container_details__avocado">
          <div className="container_details__img">
            <img
              src={`https://platzi-avo.vercel.app/${avocado.image}`}
              alt=""
            />
          </div>

          <div className="container_details__info">
            <h1 className="details_title">{avocado.name}</h1>
            <p className="details_description">{avocado.attributes.description}</p>
            <p className="details_price">$ {avocado.price}</p>
            <div className="container__details__btn-input">
              <input  type="number" min={0} max={100} />
              <button className="details_info__btn" key={avocado.id}>
              <AiOutlineShoppingCart size="1em" />
                Add to Cart
              </button>
            </div>

            <div className="container__details_atribbutes">
              <div className="container__atribbutes_title">
                <h4>Shape :</h4>
                <h4>Hardiness :</h4>
                <h4>Taste :</h4>
              </div>

              <div className="container__atribbutes_info">
                <p>{avocado.attributes.shape}</p>
                <p>{avocado.attributes.hardiness}</p>
                <p>{avocado.attributes.taste}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Details;
