import React, { useState } from "react";

import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

export const Navbar = (props) => {
  const { user, setUser } = props;
  const [menuOpen, setMenuOpen] = useState(false);

  function handleSignOut(event) {
    localStorage.removeItem("authToken");
    setUser({});
  }

  return (
    <nav>
      <Link to="/" className="title">
        Website
      </Link>
      {Object.keys(user).length === 0? 
        <NavLink className="login" to="/login">Login</NavLink> : 

        <div>
          <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul className={menuOpen ? "open" : ""}>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/services">Services</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/user">
                <img id="icon"   
                  src={user.picture} 
                  alt="">
                </img>
              </NavLink>
            </li>
            <li>
            <NavLink id="logout" onClick={(e) => handleSignOut(e)} to="/">Sign Out</NavLink>
            </li>
          </ul>
        </div>
      }
    </nav>
  );
};