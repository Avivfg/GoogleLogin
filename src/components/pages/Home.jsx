import React from "react";
import "./Home.css";

export const Home = (props) => {
  const { user } = props;

  return (
    <div>
      <h1>Home</h1>
      {Object.keys(user).length !== 0 ? (
        <div>
          <img src={user.picture} alt="" />
          <h2>Hello {user.name}</h2>
          <h3>{user.email}</h3>
          <p>You are logged-in with a google account untill you are logged out or the session is over.</p>
          <p>Feel free to look around and check out all the brand new meaningless data we have generated for you..</p>
        </div>
      ) : (
        <h2>Please login for content</h2>
      )}
    </div>
  );
};