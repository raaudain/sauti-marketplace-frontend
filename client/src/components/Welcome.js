import React from "react";
import HeaderLoggedIn from "./HeaderLoggedIn";

const Welcome = () => {
  return (
    <>
      <HeaderLoggedIn />
      <div id="welcome">
        <h1>Login successful!!!</h1>
      </div>
    </>
  );
};

export default Welcome;
