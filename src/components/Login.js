import React, { useState } from "react";
import { Redirect } from "react-router-dom"
import { connect } from "react-redux";
import { logIn } from "../store/actions/authActions";
import Header from "./Header";

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
      {console.log(props.isSuccess)}
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
  
            <button>Sign In</button>
          </form>
          
        </div> ) : (<Redirect to="/profile" />)
      }
    </>
  );
};

const mapStateToProps = state => {
  return {
    isSuccess: state.authReducer.isSuccess,
    isFailure: state.authReducer.error
  };
};

export default connect(mapStateToProps, { logIn })(Login);
