import React, {useState} from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { signIn } from "../store/actions/authActions";

const Login = () => {
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

  }

  return (
    <>
      <Header />
      
      <div className="signIn">
      <h2>Sign into Sauti</h2>
        <form onSubmit={handleSubmit}>
          <input 
            className="username"
            type="text"
            name="username"
            placeholder="USERNAME"
            value={credentials.username}
            onChange={handleChange}
          />
  
          <input
            className="pass"
            type="password" 
            name="password"
            placeholder="PASSWORD"
            value={credentials.password}
            onChange={handleChange}
          />

          <button>Sign In</button>
        </form>
        
      </div>
    </>
  );
};

export default Login;
