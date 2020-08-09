import React from "react";
import loading from "../img/loading-icon.png";
import Header from "./Header";

const Loading = () => {
  return (
    <>
      <Header />
      <img className="loading-icon" src={loading} alt="loading page" />
    </>
  );
};

export default Loading;
