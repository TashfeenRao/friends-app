import React, { useContext } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { Link } from "react-router-dom";
import { userContext } from "../../App";
import useStyles from "../cutomHooks/UseStyles";

export default function AppBarComp() {
  const { user, setLoggedin } = useContext(userContext);
  const { role } = user;
  const classes = useStyles();

  const style = {
    Link: {
      textDecoration: "none",
      color: "white",
      padding: "10px",
      borderRadius: "10px",
    },
  };

  return (
    <AppBar position="static" color="secondary" className={classes.root}>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          <Link
            to="/"
            style={style.Link}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#2E294E")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "inherit")}
          >
            Friends App
          </Link>
        </Typography>
        <Link
          to="/register"
          onClick={() => {
            localStorage.clear();
            setLoggedin(false);
          }}
        >
          Sign Out
        </Link>
        <Link to={`/${role ? "provider" : "client"}/profile`}>
          <AccountCircle />
        </Link>
      </Toolbar>
    </AppBar>
  );
}
