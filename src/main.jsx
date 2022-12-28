import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Auth0Provider } from '@auth0/auth0-react';


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider 
       domain = "dev-orimtenzif41df62.us.auth0.com"
       clientId = "2QeBCiCMYhhpWBYrKXjmp2DzsEDJ2loI"
       redirectUri={window.location.origin}>
       <App />
    </Auth0Provider>
  </React.StrictMode>
 
  
);
