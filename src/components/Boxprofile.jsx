import React from "react";
import "../assets/sass/boxprofile.scss";
import { useAuth0 } from "@auth0/auth0-react";
import { NavLink, useNavigate } from "react-router-dom";

export default function Boxprofile({slideProfile}) {
  const { loginWithRedirect, user, logout, isAuthenticated } = useAuth0();
  return (
    <div className={slideProfile? "container__boxprofile box__profile-open" : "container__boxprofile"  } >
      {isAuthenticated ? (
        <>
           <img src={user.picture} alt="" />
          <NavLink className="box_navbar" to="/profile">
            {" "}
            Profile
          </NavLink>

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
