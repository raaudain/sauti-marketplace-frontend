import React, { useState } from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { createAccount } from "../store/actions/createActions";

const Register = props => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    cPassword: ""
  });

  

  const handleChange = event => {
    event.preventDefault();
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(credentials)
    props.createAccount(credentials);
  };

  return (
    <>
      <Header />
      <div className="register">
        <h2>Sign up for account</h2>
        <form onSubmit={handleSubmit}>
          <input
            className="email"
            type="text"
            onChange={handleChange}
            name="email"
            value={credentials.email}
            placeholder="EMAIL"
          />

          <input
            className="pass"
            type="password"
            onChange={handleChange}
            name="password"
            value={credentials.password}
            placeholder="PASSWORD"
          />

          <input
            className="pass"
            type="password"
            onChange={handleChange}
            name="cPassword"
            value={credentials.cPassword}
            placeholder="RE-ENTER PASSWORD"
          />

          <button>REGISTER</button>
        </form>
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps, { createAccount })(Register);
