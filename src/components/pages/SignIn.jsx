import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import "./SignIn.css";

export const SignIn = (props) => {
  const { setUser } = props;
  const navigate = useNavigate();

  function handleCallbackResponse(response) {
    var userObject = jwtDecode(response.credential);
    localStorage.setItem('authToken', response.credential);
    
    setUser(userObject);
    navigate("/");
  }

  useEffect(() => {
    // Check if the user is already authenticated using the stored token
    const storedToken = localStorage.getItem('authToken');
    if (storedToken) {
      const userObject = jwtDecode(storedToken);
      setUser(userObject);
      navigate("/");
    } else {
      /* global google */
      google.accounts.id.initialize({
        client_id:
          "252355028501-k5p6qbhtgndjjts9ln6ha44o8mf2bsk9.apps.googleusercontent.com",
        callback: handleCallbackResponse,
      });

      google.accounts.id.renderButton(document.getElementById("signInDiv"), {
        theme: "outline",
        size: "large",
      });

      google.accounts.id.prompt();
    }
  }, []);

  return (
    <div className="container">
    <div className="login-box">
      <h1>Login options:</h1>
      <div id="signInDiv"></div>
    </div>
  </div>
  );
};