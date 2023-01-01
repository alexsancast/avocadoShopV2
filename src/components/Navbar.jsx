import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { BsFillPersonFill } from "react-icons/bs";
import { GiBasket } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import "../assets/sass/navbar.scss";
import { IoReorderThreeOutline } from "react-icons/io5";
import { useAuth0 } from "@auth0/auth0-react";
//Imagnes
import logo from "../../public/logo.png";

export default function Navbar({
  findAvocado,
  toggleSidebar,
  amount,
  preview,
  subtotal,
  slideBasket,
  slidePreview,
  slideIconSearch,
  disableSearch,
  slideProfileIcon
}) {
  const navegate = useNavigate();
  const { isAuthenticated  , user} = useAuth0();
  const onHanbleBtn = () => {
    navegate("/checkout");
  };
  const handleInput = (e) => {
    findAvocado(e.target.value);
  };

  return (
    <header className="header">
      <div className="header__container">
        <NavLink to="/">
          <img src={logo} alt="logoAvocado2" />
        </NavLink>

        <nav className="nav">
          <ul className="ul">
            <li className="li__item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "isActive" : "isDesactive"
                }
                to="/aboutme"
              >
                About me
              </NavLink>
            </li>
            <li className="li__item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "isActive" : "isDesactive"
                }
                to="/location"
              >
                Location
              </NavLink>
            </li>
            <li className="li__item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "isActive" : "isDesactive"
                }
                to="/support"
              >
                Support
              </NavLink>
            </li>
          </ul>
        </nav>

        <div
          className={
            disableSearch ? "header__search search-open" : "search-visibility"
          }
        >
          <FaSearch
            disabled={true}
            onClick={slideIconSearch}
            className="search_icon"
          />

          <input
            onChange={handleInput}
            className="header__search_input "
            placeholder="Search..."
            type="text"
          />
        </div>

        <div className="header__username-amount">
          <div className="header__username_person">
            {" "}
            <BsFillPersonFill onClick={slideProfileIcon} className="header__username" size="1.3em" />
            <h2>{isAuthenticated ?  user.email: "Hi , sign up"}</h2>
          </div>

          <div>
            <div className="header__amount">{amount}</div>

            <GiBasket
              onClick={slidePreview}
              className="header__basket"
              size="1.3em"
            />
          </div>

          <IoReorderThreeOutline
            onClick={toggleSidebar}
            className="menu_ham"
            size="1.5em"
          />
        </div>
      </div>

      <div
        className={
          slideBasket ? "header__preview  basket-open" : "header__preview"
        }
      >
        {preview.map((avo) => {
          return (
            <div className="preview__conatiner" key={avo.id}>
              <div className="preview__avo">
                <img
                  src={`https://platzi-avo.vercel.app/${avo.image}`}
                  alt=""
                />
                <h3>{avo.name}</h3>

                <div className="preview__quantity">
                  <label>X{avo.quantity}</label>
                </div>

                <div className="preview__price">
                  <p>${avo.price}</p>
                </div>
              </div>
            </div>
          );
        })}

        <div className="preview__review-cart">
          <label htmlFor=""> Subtotal: $ {subtotal.toFixed(2)}</label>

          <button onClick={onHanbleBtn}>Review Cart</button>
        </div>
      </div>
    </header>
  );
}
