import React from "react";
import "../assets/sass/boxprofile.scss";
import { useAuth0 } from "@auth0/auth0-react";
import { NavLink, useNavigate } from "react-router-dom";

export default function Boxprofile() {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
  return (
    <div className="container__boxprofile">
      {isAuthenticated ? (
        <>
          <NavLink to="/profile">Profile</NavLink>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <button onClick={loginWithRedirect}>Sign in </button>
          <h1>New customer? </h1>
        </>
      )}
    </div>
  );
}
