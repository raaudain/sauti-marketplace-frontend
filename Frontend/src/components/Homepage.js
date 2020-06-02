import React from "react";
import Header from "./Header";

const Homepage = () => {
  return (
    <>
      <Header />
      <div className="landingPage">
          <div className="box">
              <p>Mobile-based trade and market information</p>
              <p>Empowering East Africa's women led SMEs to trade legally and across borders</p>
              <div>
                  <button>Our Services</button>
                  <button>Our Impact</button>
              </div>
          </div>
      </div>
    </>
  );
};

export default Homepage;
