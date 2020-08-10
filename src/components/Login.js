import React, { useState } from "react";
import { Redirect, Link } from "react-router-dom"
import { connect } from "react-redux";
import { logIn } from "../store/actions/authActions";
import Header from "./Header";
import Loading from "./Loading";

const Login = props => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });

  const handleChange = event => {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value
    });
  }

  const handleSubmit = event => {
    event.preventDefault();
    props.logIn(credentials);
  }

  return (
    <>
      <Header /> 
      {localStorage.getItem("token") ? (<Redirect to="/profile" />) : (<Link to="/login" />)}
      {!props.isSuccess ? 
        (<div className="signIn">
        <h2>Sign into Sauti</h2>
          <form onSubmit={handleSubmit}>
            {props.isFailure ? (<div className="error">Invalid credentials</div>) : null}
            <div>
              <input 
                className="username"
                type="text"
                name="username"
                placeholder="USERNAME"
                value={credentials.username}
                onChange={handleChange}
                required
              />
      
              <input
                className="pass"
                type="password" 
                name="password"
                placeholder="PASSWORD"
                value={credentials.password}
                onChange={handleChange}
                required
              />
            </div>
            {props.isLoading ? (<Loading />) : (<button>Sign In</button>)}
          </form>
          
        </div>) : (<Redirect to="/profile" />)
      }
    </>
  );
};

const mapStateToProps = state => {
  return {
    isLoading: state.authReducer.isLoading,
    isSuccess: state.authReducer.isSuccess,
    isFailure: state.authReducer.error
  };
};

export default connect(mapStateToProps, { logIn })(Login);
