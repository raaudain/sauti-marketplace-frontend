import React, { useState } from "react";
import { useHistory } from "react-router-dom"
import Header from "./Header";
import { connect } from "react-redux";
import { logIn } from "../store/actions/authActions";

const Login = props => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });

  const history = useHistory();

  const handleChange = event => {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value
    });
  }

  const handleSubmit = event => {
    event.preventDefault();
    props.logIn(credentials);
    history.push("/profile");
  }

  return (
    <>
      <Header username={credentials.username}/>
      <div className="signIn">
      <h2>Sign into Sauti</h2>
        <form onSubmit={handleSubmit}>
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
        
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps, {logIn})(Login);
