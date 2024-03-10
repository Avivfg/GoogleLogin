import React, { useState } from "react";

import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

export const Navbar = (props) => {
  const { user, setUser } = props;
  const [menuOpen, setMenuOpen] = useState(false);

  function handleSignOut(event) {
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
              <img id="userIcon"   
                src={user.picture} 
                alt=""
                style={{
                  width: '30px', // Adjust the size as needed
                  height: '30px',
                  borderRadius: '50%', // This creates a circular shape
                  objectFit: 'cover', // Ensures the image fills the circle without stretching
                }} >
              </img>
            </li>
            <li>
            <NavLink style={{background:"#7465655c", fontSize:"small"}} onClick={(e) => handleSignOut(e)} to="/">Sign Out</NavLink>
            </li>
          </ul>
        </div>
      }
    </nav>
  );
};