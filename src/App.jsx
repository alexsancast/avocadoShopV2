import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Details from "./components/Details";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Aboutme from "./components/Aboutme";
import Location from "./components/Location";
import Contactus from "./components/Contactus";
import Slidebar from "./components/Slidebar";
import Backdrop from "./components/Backdrop";

function App() {
  const [avocados, setAvocados] = useState([]);
  const [results, setresults] = useState([]);
  const [value, setvalue] = useState(true);
  const [isLoading, setisLoading] = useState(true);
  const [slidebar, setSlidebar] = useState(false);

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

  const toggleSidebar = () => {
    setSlidebar((prevent) => !prevent);
  };
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
      <Navbar toggleSidebar={toggleSidebar} findAvocado={findAvocado} />
      <Slidebar slidebar={slidebar} />
      <Backdrop />
      <Routes>
        <Route path="/aboutme" element={<Aboutme />}></Route>
        <Route path="/location" element={<Location />}></Route>
        <Route path="/support" element={<Contactus />}></Route>
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

        <Route path="/details/:id" element={<Details />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
