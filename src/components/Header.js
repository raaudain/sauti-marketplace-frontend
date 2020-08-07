import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logOut } from "../store/actions/authActions";

const Header = props => {
  const handleLogout = () => {
    props.logOut();
  }

  return (
    <div className="header">
      <div className="logo">
        <Link to="/">
          <h1>Sauti.</h1>
        </Link>
      </div>
      {!localStorage.getItem("token") ? (
        <div className="links">
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
          <Link to="/services">Services</Link>
          <Link to="/about">About</Link>
        </div>
      ) : (
        <div className="links">
          <span>Hello, {localStorage.getItem("user")}</span>
          <Link to="/profile">Profile</Link>
          <Link to="/" onClick={handleLogout}>Log Out</Link>
          <Link to="/services">Services</Link>
          <Link to="/about">About</Link>
        </div>
      )}
      
    </div>
  );
};

export default connect(null, { logOut })(Header);