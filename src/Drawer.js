import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MenuIcon from "@material-ui/icons/Menu";
import logo from "./images/logo.png";
import logoIcon from "./images/icon.png";
// import MailIcon from "@material-ui/icons/Mail";
import "./drawer.css";

import { Link } from "react-router-dom";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

export default function Drawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {[
          {
            name: "Call",
            href: "tel:02030519033",
            target: "_blank",
          },
          {
            name: "Booking",
            href: "/booking",
          },
          {
            name: "My Account",
            href: "https://portal.joblogic.com",
            target: "_blank",
          },
          {
            name: "Van Tracking",
            href: "/van",
            target: "",
          },
        ].map((text, index) => (
          <ListItem button key={text.name}>
            <a className="drawer-links" target={text.target} href={text.href}>
              <ListItemIcon>
                {/* {index % 2 === 0 ? <InboxIcon /> : <InboxIcon />} */}
                <img className="drawer-icon" src={logoIcon} alt="" />
              </ListItemIcon>
              <ListItemText primary={text.name} />
            </a>
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );

  return (
    <div className="top-bar">
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Link to="/">
            <img className="nav-logo" src={logo} />
          </Link>
          <br />
          <Button onClick={toggleDrawer(anchor, true)}>
            <h3 className="top-bar-white">MENU</h3>
            <MenuIcon style={{ color: "white" }} />
          </Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
