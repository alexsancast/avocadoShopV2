import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { BsFillPersonFill } from "react-icons/bs";
import { GiBasket } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import "../assets/sass/navbar.scss";
import { IoReorderThreeOutline } from "react-icons/io5";
//Imagnes
import logo from "../../public/logo.png";

export default function Navbar({ findAvocado, toggleSidebar }) {
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
          <BsFillPersonFill className="header__username" size="1.3em" />

          <div>
            <Amount/>
            
          <GiBasket className="header__basket" size="1.3em" />


          </div>

          

          

          <IoReorderThreeOutline 
          
            onClick={toggleSidebar}
            className="menu_ham"
            size="1.5em"
          />

            
          

      
        </div>
      </div>
    </header>
  );
}

const Amount = ()=> {

  const value  = sessionStorage.getItem("cart");
  const value2 =value.map (quali =>  quali.quantity ).reduce((coun , qual)=> coun + qual) ; 

  return (
    <div className="header__amount">
      {value2}


    </div>
  )

}