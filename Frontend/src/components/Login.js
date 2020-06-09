import React from "react";
import Header from "./Header";

const Login = () => {
  return (
    <>
      <Header />

      <form>
        <input 
          className=""
          type="text"
          name="username"
          placeholder="Username"
          value=""
          onChange=""
        />

        <input
          className=""
          type="password" 
          name="password"
          placeholder="Password"
          value=""
          onChange=""
        />
      </form>
    </>
  );
};

export default Login;
