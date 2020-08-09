import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createAccount } from "../store/actions/createActions";
import Header from "./Header";

const Register = props => {
  const [credentials, setCredentials] = useState({
    username: "",
    email: "",
    password: ""
  });

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
      nameError.innerHTML = "<div class='error'>Username must be at least 6 characters</div>";
      errors++;
    }

    if (username.value.length > 20) {
      nameError.innerHTML = "<div class='error'>Username cannot be over 20 characters</div>";
      errors++;
    }

    if (username.value.match(/[#/\/\\]/)) {
      nameError.innerHTML = "<div class='error'>Username must not contain hashtags, backslashes, or forward slashes</div>";
      errors++;
    }

    // For email validation
    if (!email.value.includes("@") || email.value.length === 0 || email.value === null) {
      emailError.innerHTML = "<div class='error'>Please enter valid email address</div>";
      errors++;
    }

    // For password validation
    if (password.value.length < 8) {
      passError.innerHTML = "<div class='error'>Password must be atleast 8 characters</div>";
      errors++;
    }

    if (password.value.length > 25) {
      passError.innerHTML = "<div class='error'>Password cannot be over 25 characters</div>";
      errors++;
    }

    if (!password.value.match(/[A-Z]/) || !password.value.match(/[a-z]/) || !password.value.match(/[0-9]/) || !password.value.match(/[!*&^%$@]/)) {
      passError.innerHTML = "<div class='error'>Password must have at least one usercase letter, one lowercase letter, one number, and one special character (!, *, &, ^, %, $, @)</div>";
      errors++;
    }

    // For re-enter password validation
    if (password.value !== cPassword.value) {
      cpassError.innerHTML = "<div class='error'>Passwords must match</div>";
      errors++;
    }

    if (errors > 0) {
      event.preventDefault();
    }
    else {
      event.preventDefault();
      props.createAccount(credentials);
    }
  };

  return (
    <>
      <Header />
      {!props.isSuccess ? (
        <div id="register">
        <h2>Sign up for account</h2>
        <form onSubmit={handleSubmit}>
          {props.isFailure && props.isFailure.message.data.message.includes("Users.username") ? (<div className="error">Username taken. Please choose another.</div>) : null}
          <div id="nameError"></div>
          <input
            id="username"
            type="text"
            onChange={handleChange}
            name="username"
            value={credentials.username}
            placeholder="USERNAME"
          />

          {props.isFailure && props.isFailure.message.data.message.includes("Users.email") ? (<div className="error">Email already in use</div>) : null}
          <div id="emailError"></div>
          <input
            id="email"
            type="text"
            onChange={handleChange}
            name="email"
            value={credentials.email}
            placeholder="EMAIL"
          />

          <div id="passError"></div>
          <input
            id="pass"
            type="password"
            onChange={handleChange}
            name="password"
            value={credentials.password}
            placeholder="PASSWORD"
          />

          <div id="cpassError"></div>
          <input
            id="cpass"
            type="password"
            placeholder="RE-ENTER PASSWORD"
          />

          <button>REGISTER</button>
        </form>
      </div>
      ) : (<Redirect to="/login" />)}
    </>
  );
};

const mapStateToProps = state => {
  return {
    isSuccess: state.createReducer.isSuccess,
    isFailure: state.createReducer.error
  }
}

export default connect(mapStateToProps, { createAccount })(Register);
