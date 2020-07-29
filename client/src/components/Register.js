import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Header from "./Header";
import { connect } from "react-redux";
import { createAccount } from "../store/actions/createActions";


const Register = props => {
  const [credentials, setCredentials] = useState({
    username: "",
    email: "",
    password: ""
  });

  const history = useHistory();

  const handleChange = event => {
    event.preventDefault();
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = event => {
    const password = document.getElementById("pass");
    const cPassword = document.getElementById("cpass");
    const username = document.getElementById("username");
    const email = document.getElementById("email");

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const passError = document.getElementById("passError");
    const cpassError = document.getElementById("cpassError");

    let errors = 0;

    // For username validation
    if (username.value.length < 4) {
      nameError.innerHTML = "Username must be at least 6 characters"
      errors++;
    }

    if (username.value.length > 20) {
      nameError.innerHTML = "Username cannot be over 20 characters"
      errors++;
    }

    if (username.value.match(/[#/\/\\]/)) {
      nameError.innerHTML = "Username must not contain hashtags, backslashes, or forward slashes"
      errors++;
    }

    // For email validation
    if (!email.value.includes("@") || email.value.length === 0 || email.value === null) {
      emailError.innerHTML = "Please enter valid email address"
      errors++;
    }

    // For password validation
    if (password.value.length < 8) {
      passError.innerHTML = "Password must be atleast 8 characters"
      errors++;
    }

    if (password.value.length > 25) {
      passError.innerHTML = "Password cannot be over 25 characters"
      errors++;
    }

    if (!password.value.match(/[A-Z]/) || !password.value.match(/[a-z]/) || !password.value.match(/[0-9]/) || !password.value.match(/[!*&^%$@]/)) {
      passError.innerHTML = "Password must have at least one usercase letter, one lowercase letter, one number, and one special character (!, *, &, ^, %, $, @)"
      errors++;
    }

    // For re-enter password validation
    if (password.value !== cPassword.value) {
      cpassError.innerHTML = "Passwords must match"
      errors++;
    }

    if (errors > 0) {
      event.preventDefault();
    }
    else {
      props.createAccount(credentials);
      history.push("/login");
    }
  };

  return (
    <>
      <Header />
      <div id="register">
        <h2>Sign up for account</h2>
        <form onSubmit={handleSubmit}>

          <div className="error" id="nameError"></div>
          <input
            id="username"
            type="text"
            onChange={handleChange}
            name="username"
            value={credentials.username}
            placeholder="USERNAME"
          />

          <div className="error" id="emailError"></div>
          <input
            id="email"
            type="text"
            onChange={handleChange}
            name="email"
            value={credentials.email}
            placeholder="EMAIL"
          />

          <div className="error" id="passError"></div>
          <input
            id="pass"
            type="password"
            onChange={handleChange}
            name="password"
            value={credentials.password}
            placeholder="PASSWORD"
          />

          <div className="error" id="cpassError"></div>
          <input
            id="cpass"
            type="password"
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
