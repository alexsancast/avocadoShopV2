import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Details from "./components/Details";
import { useEffect, useState } from "react";

function App() {
  const [avocados, setAvocados] = useState([]);
  const [results, setresults] = useState([]);
  const [value, setvalue] = useState(true);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      const API_REST = `https://platzi-avo.vercel.app`;
      const getApi = await fetch(`${API_REST}/api/avo`);
      const data = await getApi.json();
      setAvocados(data.data);
      setresults(data.data);
      setisLoading(false);
    }

    getData();
  }, []);

  const findAvocado = (world) => {
    let avo = results.filter((data) =>
      data.name.toLowerCase().includes(world.toLowerCase())
    );
    if (avo.length == 0) {
      setvalue(false);
    } else {
      setvalue(true);
    }
    setAvocados(avo);
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
        <Route
          path="/home"
          element={
            <Home avocados={avocados} value={value} isLoading={isLoading} />
          }
        ></Route>
        <Route
          path="*"
          element={
            <div>
              {" "}
              <h1>Page not found</h1>
            </div>
          }
        ></Route>

        <Route
          path="/details/:id"
          element={<Details/>}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
