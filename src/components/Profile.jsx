import React from "react";
import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "../assets/sass/profile.scss";

export default function Profile({setSlideProfile}) {
    useEffect(()=>{
        setSlideProfile(false);
    },[])
  const { user, isAuthenticated, isLoading } = useAuth0();
  if (isLoading) {
    <div>Loading...</div>;
  }
  return (
    isAuthenticated && (
      <div className="container__profile">
        <img src={user.picture} alt={user.picture} />

        <div className="container__name">
          <h1>Name</h1>
          <h2>{user.name}</h2>
        </div>

        <div className="container__email" >
          <h1>Email</h1>
          <h2>{user.email}</h2> 
        </div>

        
      </div>
    )
  );
}
