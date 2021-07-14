import React from "react";
import Card from "./Card";
import "./Main.css";
import MyAccount from "./MyAccount";
import Booking from "./Booking";
import Van from "./Van";
import { Switch, Route } from "react-router-dom";

import HomeCards from "./HomeCards";

const Main = (props) => {
  return (
    <div className="main">
      <Switch>
        <Route path="/" exact>
          <HomeCards />
        </Route>
        <Route path="/booking">
          <Booking />
        </Route>
        <Route path="/van">
          <Van />
        </Route>
      </Switch>
    </div>
  );
};

export default Main;
