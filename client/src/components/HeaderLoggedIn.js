import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const HeaderLoggedIn = props => {
  const handleLogout = () => {
      localStorage.clear();
      window.location.reload();
  }

  return (
    <div className="header">
      <div className="logo">
        <Link to="/">
          <h1>Sauti.</h1>
        </Link>
      </div>
      <div className="links">
          {console.log(props)}
        <Link to="#">Welcome </Link>
        <Link to="/" onClick={handleLogout}>Log Out</Link>
        <Link to="/services">Services</Link>
        <Link to="/about">About</Link>
      </div>
    </div>
  );
};

const mapStateToValues = state => {
    return {
      user: state
    };
  };
  
export default connect(mapStateToValues, {})(HeaderLoggedIn);