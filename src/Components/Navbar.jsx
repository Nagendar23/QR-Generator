import React from "react";
import { NavLink } from "react-router-dom";
import "../Styles/Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><NavLink to="/" activeclassname="active">Home</NavLink></li>
        <li><NavLink to="/scan" activeclassname="active">Scanner</NavLink></li>
        <li><NavLink to="/history" activeclassname="active">History</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
