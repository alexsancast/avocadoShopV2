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
import Checkout from "./components/Checkout";
import Thanks from "./components/Thanks";
import Searchicon from "./components/Searchicon";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GiConsoleController } from "react-icons/gi";

function App() {
  const [avocados, setAvocados] = useState([]);
  const [results, setresults] = useState([]);
  const [amount, setAmount] = useState([]);
  const [value, setvalue] = useState(true);
  const [isLoading, setisLoading] = useState(true);
  const [slidebar, setSlidebar] = useState(false);
  const [cart, setCart] = useState(false);
  const [preview, setPreview] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [slideBasket, setSlideBasket] = useState(false);
  const [slideSearch, setSlideSearch] = useState(false);
  const [disableSearch, setDisableSearch] = useState(true);

  
  

  useEffect(() => {
    async function getData() {
      const API_REST = `https://platzi-avo.vercel.app`;
      const getApi = await fetch(`${API_REST}/api/avo`);
      const data = await getApi.json();
      setAvocados(data.data);
      setresults(data.data);

      setTimeout(() => {
        setisLoading(false);
      }, 1000);
    }
    setDisableSearch(true);
    getData();
    addAmount();
    getSubTotal();
    console.log(
      process.env.REACT_APP_AUTH0_DOMAIN,
      process.env.REACT_APP_AUTH0_DOMAIN
    )
  }, []);

  const notify = () => toast("Avocado Added !");

  const getSubTotal = () => {
    if (
      sessionStorage.getItem("cart") === null ||
      JSON.parse(sessionStorage.getItem("cart")).length === 0
    ) {
      setSubtotal(0);
    } else {
      let total = JSON.parse(sessionStorage.getItem("cart"));
      setSubtotal(
        total
          .map((value) => value.price * value.quantity)
          .reduce((cont, val) => cont + val)
      );
    }
  };
  const addAmount = () => {
    if (
      sessionStorage.getItem("cart") === null ||
      JSON.parse(sessionStorage.getItem("cart")).length === 0
    ) {
      setAmount(0);
      setPreview([]);
    } else {
      let value = JSON.parse(sessionStorage.getItem("cart"));
      setPreview(value);
      setAmount(
        value.map((quali) => quali.quantity).reduce((coun, qual) => coun + qual)
      );
    }
  };

  const addTocart = (id, input = 1) => {
    let inputAmount = Number(input);
    const avocado = avocados.find((avo) => avo.id == id);
    let avo = [];
    if (sessionStorage.getItem("cart") == null) {
      avo.push({ ...avocado, quantity: inputAmount });
      sessionStorage.setItem("cart", JSON.stringify(avo));
    } else {
      const datavo = JSON.parse(sessionStorage.getItem("cart"));
      const existing = datavo.some((avo) => avo.id == id);
      if (existing) {
        datavo.find((avo) => avo.id === id).quantity += inputAmount;
        console.log(datavo);
        sessionStorage.setItem("cart", JSON.stringify(datavo));
      } else {
        datavo.push({ ...avocado, quantity: +inputAmount });
        sessionStorage.setItem("cart", JSON.stringify(datavo));
      }
    }

    addAmount();
    getSubTotal();
    notify();
  };

  const diableIcon = () => {
    setSlidebar((prevent) => !prevent);
  };

  const toggleSidebar = () => {
    if (slideBasket !== slidebar) {
      setSlideBasket(false);
    }
    setSlidebar((prevent) => !prevent);
  };
  const slidePreview = () => {
    if (slidebar !== slideBasket) {
      setSlidebar(false);
    }
    setSlideBasket((prevent) => !prevent);
  };
  const slideIconSearch = () => {
    setSlideSearch((prevent) => !prevent);
  };

  const toggleCart = () => {
    setCart((prevent) => !prevent);
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
      <Navbar
        toggleSidebar={toggleSidebar}
        slidebar={slidebar}
        amount={amount}
        findAvocado={findAvocado}
        toggleCart={toggleCart}
        preview={preview}
        cart={cart}
        subtotal={subtotal}
        slidePreview={slidePreview}
        slideBasket={slideBasket}
        slideIconSearch={slideIconSearch}
        disableSearch = {disableSearch}
      />

      <Slidebar slidebar={slidebar} />
      <Backdrop slidebar={slidebar} toggleSidebar={toggleSidebar} />
      <ToastContainer
        position="bottom-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <Backdrop />
      <Searchicon
        slideIconSearch={slideIconSearch}
        slideSearch={slideSearch}
        findAvocado={findAvocado}
      />
      <Routes>
        <Route
          path="/aboutme"
          element={
            <Aboutme
              setDisableSearch = {setDisableSearch}
              setSlidebar={setSlidebar}
              setSlideSearch={setSlideSearch}
              slideBasket={slideBasket}
              slidePreview={slidePreview}
            />
          }
        ></Route>
        <Route
          path="/location"
          element={
            <Location
              setDisableSearch = {setDisableSearch}
              setSlidebar={setSlidebar}
              setSlideSearch={setSlideSearch}
              slideBasket={slideBasket}
              slidePreview={slidePreview}
            />
          }
        ></Route>
        <Route
          path="/support"
          element={
            <Contactus
              setDisableSearch ={setDisableSearch}
              setSlidebar={setSlidebar}
              setSlideSearch={setSlideSearch}
              slideBasket={slideBasket}
              slidePreview={slidePreview}
            />
          }
        ></Route>
        <Route
          path="/checkout"
          element={
            <Checkout
              setDisableSearch ={setDisableSearch}
              setSlideSearch={setSlideSearch}
              slideBasket={slideBasket}
              subtotal={subtotal}
              slidePreview={slidePreview}
              addAmount={addAmount}
              getSubTotal={getSubTotal}
            />
          }
        ></Route>
        <Route
          path="/home"
          element={
            <Home
              setDisableSearch = {setDisableSearch}
              addTocart={addTocart}
              avocados={avocados}
              value={value}
              isLoading={isLoading}
              addAmount={addAmount}
              getSubTotal={getSubTotal}
              notify={notify}
              slideBasket={slideBasket}
              slidePreview={slidePreview}
              setSlidebar={setSlidebar}
            />
          }
        ></Route>

        <Route
          path="/details/:id"
          element={
            <Details
              setDisableSearch ={setDisableSearch}
              setSlideSearch={setSlideSearch}
              addTocart={addTocart}
              slideBasket={slideBasket}
              slidePreview={slidePreview}
              notify={notify}
            />
          }
        ></Route>

        <Route path="/thanks" element={<Thanks />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
