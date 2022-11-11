import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import { useEffect, useState } from "react";

function App() {
  const [avocados, setAvocados] = useState([]);

  useEffect(() => {
    async function getData() {
      const API_REST = `https://platzi-avo.vercel.app`;
      const getApi = await fetch(`${API_REST}/api/avo`);
      const data = await getApi.json();
      setAvocados(data.data);
     
    }

    getData();
  }, []);

  function findAvocado(world) {
    const data = [...avocados]
    const newAvocados = data.filter((avo) => avo.name.toLowerCase().includes(world.toLowerCase()));
    setAvocados(newAvocados);
  }

  const filter = (worlds) => {
    let datos = results.filter((data) => {
      if (data.name.toLowerCase().includes(worlds.toLowerCase())) {
        return data;
      }
    });
    if (datos.length == 0) {
      setvalue(false);
    } else {
      setvalue(true);
    }
    setCharacters(datos);
  };
  return (
    <BrowserRouter>
      <Navbar findAvocado={findAvocado} />

      <Routes>
        <Route
          path="/aboutme"
          element={
            <div>
              {" "}
              <h1>hola</h1>
            </div>
          }
        ></Route>
        <Route
          path="/location"
          element={
            <div>
              {" "}
              <h1>La Romana</h1>
            </div>
          }
        ></Route>
        <Route
          path="/contactus"
          element={
            <div>
              {" "}
              <h1>Registro</h1>
            </div>
          }
        ></Route>
        <Route path="/home" element={<Home avocados={avocados} />}></Route>
        <Route
          path="*"
          element={
            <div>
              {" "}
              <h1>Page not found</h1>
            </div>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
