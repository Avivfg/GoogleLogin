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
          <p>{user.email}</p>
        </div>
      ) : (
        <h2>Please login for content</h2>
      )}
    </div>
  );
};