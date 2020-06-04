import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <>
      <Header />
      <div className="landingPage">
        <div className="box">
          <p>Mobile-based trade and market information</p>
          <p>
            Empowering East Africa's women led SMEs to trade legally and across
            borders
          </p>
          <div>
            <Link to="/services">
              <button>Our Services</button>
            </Link>
            <Link to="/about">
              <button>Our Impact</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
