import React from "react";
import "./UserSection.css";

export const UserSection = (props) => {
  const { user } = props;

  const convertTimestamp = (timestamp) => {
    const date = new Date(timestamp * 1000); // Multiply by 1000 to convert seconds to milliseconds
    const options = {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: false, // Use 24-hour format
    };
  
    return date.toLocaleString("en-US", options);
  };
  
  const UserDetailsBox = ({ user }) => (
    <div className="user-details-box">
      <p><strong>ID:</strong> {user.sub}</p>
      <p><strong>Given Name:</strong> {user.given_name}</p>
      <p><strong>Family Name:</strong> {user.family_name}</p>
      <p><strong>Locale:</strong> {user.locale}</p>
      <p><strong>JWT issued at:</strong> {convertTimestamp(user.iat)}</p>
      <p><strong>JWT will expire at:</strong> {convertTimestamp(user.exp)}</p>
    </div>
  );
  return (
    <div>
      <h1>User details</h1>
      <img src={user.picture} alt="" />
      <p><strong>Email:</strong> {user.email}</p>
      <UserDetailsBox user={user} />
    </div>
  );
};