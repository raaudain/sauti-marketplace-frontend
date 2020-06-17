import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <Link to="/">
          <h1>Sauti.</h1>
        </Link>
      </div>
      <div className="links">
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
        <Link to="/services">Services</Link>
        <Link to="/about">About</Link>
      </div>
    </div>
  );
};

export default Header;
