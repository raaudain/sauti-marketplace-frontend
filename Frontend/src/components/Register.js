import React, { useState } from "react";
import Header from "./Header";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Register = () => {
  const [credentials, setCredentials] = useState({
    password: "",
    email: ""
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
      <form>
        <input
          className=""
          type="text"
          onChange={handleChange}
          name="email"
          value={credentials.email}
          placeholder="EMAIL"
        />

        <input
          className=""
          type="password"
          onChange={handleChange}
          name="password"
          value={credentials.password}
          placeholder="PASSWORD"
        />

        <input
          className=""
          type="password"
          onChange={handleChange}
          name="password"
          value={credentials.password}
          placeholder="RE-ENTER PASSWORD"
        />
      </form>
    </>
  );
};

export default Register;
