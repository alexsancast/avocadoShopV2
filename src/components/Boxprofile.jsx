import React from "react";
import "../assets/sass/boxprofile.scss";
import { useAuth0 } from "@auth0/auth0-react";
import { NavLink, useNavigate } from "react-router-dom";

export default function Boxprofile() {
  const { loginWithRedirect, logout } = useAuth0();
  return (
    <div className="container__boxprofile">
      <NavLink to="/profile">Profile</NavLink>
      <button onClick={loginWithRedirect}>Login</button>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
