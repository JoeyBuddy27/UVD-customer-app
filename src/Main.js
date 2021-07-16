import React from "react";
import Card from "./Card";
import "./Main.css";
import Booking from "./Booking";
import Van from "./Van";
import MyAccount from "./MyAccount";
import { Switch, Route } from "react-router-dom";
import PrivacyPolicy from "./PrivacyPolicy";

import HomeCards from "./HomeCards";

const Main = (props) => {
  return (
    <div className="main">
      <Switch>
        <Route path="/" exact>
          <HomeCards />
        </Route>
        <Route path="/booking" component={Booking} />
        <Route path="/van" component={Van} />
        <Route path="/my-account" component={MyAccount} />
        <Route path="/privacy-policy" component={PrivacyPolicy} />
      </Switch>
    </div>
  );
};

export default Main;
