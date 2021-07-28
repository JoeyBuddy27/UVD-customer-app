import React from "react";
import "./Main.css";
import Booking from "./Booking";
import Van from "./Van";
import MyAccount from "./MyAccount";
import { Switch, Route } from "react-router-dom";
import PrivacyPolicy from "./PrivacyPolicy";
import HomeCards from "./HomeCards";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import { AuthProvider } from "./AuthContext";

const Main = (props) => {
  return (
    <div className="main">
      <AuthProvider>
        <Switch>
          <Route path="/" exact component={Login} />
          <PrivateRoute path="/home" component={HomeCards} />
          <PrivateRoute path="/booking" component={Booking} />
          <PrivateRoute path="/van" component={Van} />
          <PrivateRoute path="/my-account" component={MyAccount} />
          <PrivateRoute path="/privacy-policy" component={PrivacyPolicy} />
        </Switch>
      </AuthProvider>
    </div>
  );
};

export default Main;
