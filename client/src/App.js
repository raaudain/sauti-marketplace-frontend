import React from "react";
import { Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import About from "./components/About";
import Login from "./components/Login";
import Register from "./components/Register";
import Services from "./components/Services";
import PrivateRoute from "./utils/PrivateRoute";
import Profile from "./components/Profile";

const App = () => {
  return (
    <div className="container">
      <Route exact path="/" component={Homepage} />
      <Route path="/about" component={About} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/services" component={Services} />
      <PrivateRoute path="/profile" component={Profile} />
    </div>
  );
};

export default App;
