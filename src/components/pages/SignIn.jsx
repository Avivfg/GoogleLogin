import React from "react";
import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";

export const SignIn = (props) => {
    const { setUser } = props;

  function handleCallbackResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
    var userObject = jwtDecode(response.credential);
    console.log(userObject);
    setUser(userObject);
    document.getElementById("signInDiv").hidden = true;
  }

  useEffect(() => {
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
  }, []);

  return (
    <div className="App">
        <h1>Login page</h1>
      <div id="signInDiv"></div>
    </div>
  );
};