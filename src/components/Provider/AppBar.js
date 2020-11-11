import React, { useContext } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { Link } from "react-router-dom";
import { userContext } from "../../App";
import useStyles from "../cutomHooks/UseStyles";

export default function AppBarComp() {
  const { user } = useContext(userContext);
  const { role } = user;
  const classes = useStyles();

  return (
      <AppBar position="static" className={classes.root}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link to="/">Friends App</Link>
          </Typography>
          <Link to="/register" onClick={() => localStorage.clear()}>
            Sign Out
          </Link>
          <Link to={`/${role ? "provider" : "client"}/profile`}>
            <AccountCircle />
          </Link>
        </Toolbar>
      </AppBar>
  );
}
