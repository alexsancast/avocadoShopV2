import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../assets/sass/detail.scss";

function Details() {
  const [avocado, setAvocado] = useState();
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
    <div className="container_details">{isLoading ? <div>Loading...</div> : <div>All is set </div>}</div>
  );
}

export default Details;
