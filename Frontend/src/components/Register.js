import React, { useState } from "react";
import Header from "./Header";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Register = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: ""
  });

  const handleChange = event => {
    event.preventDefault();
    setCredentials({ 
      ...credentials, 
      [event.target.name]: event.target.value 
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    let uname = credentials.username;

    axiosWithAuth()
      .post("/auth/register", credentials)
      .then((res) => {
        axiosWithAuth()
          .get("/users")
          .then((res) => {});
      });
  };

  return (
    <>
      <Header />
      <div className="register">
        <h2>Sign up for account</h2>
        <form>
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
            name="password"
            value={credentials.password}
            placeholder="RE-ENTER PASSWORD"
          />
  
          <button>REGISTER</button>
        </form>
      </div>
    </>
  );
};

export default Register;
