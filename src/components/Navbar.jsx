import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { BsFillPersonFill } from "react-icons/bs";
import { GiBasket } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import "../assets/sass/navbar.scss";
//Imagnes
import logo from "../../public/logo.png";

export default function Navbar({ findAvocado }) {
  const handleInput = (e) => {
    findAvocado(e.target.value);
  };

  return (
    <header className="header">
      <div className="header__container">
        <NavLink to="/home">
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

        <div className="header__search">
          <FaSearch className="search_icon" />

          <input
            onChange={handleInput}
            className="header__search_input "
            placeholder="Search..."
            type="text"
          />
        </div>

        <div className="header__username-amount">
          <div className="header__username">
            <BsFillPersonFill size="1.3em" />
            <p>Hi , Jenn</p>
          </div>

          <div className="header__amount">
            <GiBasket size="1.3em" />
          </div>
        </div>
      </div>
    </header>
  );
}
