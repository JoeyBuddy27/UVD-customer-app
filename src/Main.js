import React from "react";
import Card from "./Card";
import "./Main.css";
import MyAccount from "./MyAccount";

import HomeCards from "./HomeCards";

const Main = () => {
  return (
    <div className="main">
      <h1>CUSTOMER PORTAL</h1>
      {/* <HomeCards /> */}
      <MyAccount />
    </div>
  );
};

export default Main;
