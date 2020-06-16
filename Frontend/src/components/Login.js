import React, {useState} from "react";
import Header from "./Header";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "",
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

    axiosWithAuth()
      .post("/auth/login", credentials)
      .then(res => {
        localStorage.setItem("token", res.data.payload);
      })
      .catch(err => console.log(err.response));
  }

  return (
    <>
      <Header />
      
      <div className="signIn">
      <h2>Sign into Sauti</h2>
        <form onSubmit={handleSubmit}>
          <input 
            className="email"
            type="text"
            name="email"
            placeholder="Email"
            value={credentials.email}
            onChange={handleChange}
          />
  
          <input
            className="pass"
            type="password" 
            name="password"
            placeholder="Password"
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
