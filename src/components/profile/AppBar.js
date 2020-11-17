import React, { useContext } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { Link } from "react-router-dom";
import { userContext } from "../../App";
import useStyles from "../cutomHooks/UseStyles";
import { Grid, IconButton, Menu, MenuItem } from "@material-ui/core";

export default function AppBarComp() {
  const { user, setLoggedin } = useContext(userContext);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const classes = useStyles();

  const style = {
    Link: {
      textDecoration: "none",
      color: "#F1E9DA",
      padding: "10px",
      borderRadius: "10px",
      border: "1px solid #2E294E",
    },
    signOut: {
      textDecoration: "none",
    },
  };

  return (
    <AppBar position="static" color="secondary" className={classes.root}>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          <Grid container alignContent="center">
            <Grid item xs={6}>
              <Link
                to={user.type === "client" ? "/cleints" : "/providers"}
                style={style.Link}
                onMouseOver={(e) =>
                  (e.target.style.backgroundColor = "#2E294E")
                }
                onMouseLeave={(e) =>
                  (e.target.style.backgroundColor = "inherit")
                }
              >
                Serviso App
              </Link>
            </Grid>
            <Grid item xs={6}>
              <h3>
                {user.type === "client" ? `All Providers` : `All Clients`}
              </h3>
            </Grid>
          </Grid>
        </Typography>

        <IconButton
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleMenu}
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={open}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>
            <Link
              style={style.signOut}
              to={`/${user.type ? "provider" : "client"}/profile`}
            >
              Profile
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link
              to="/register"
              style={style.signOut}
              onClick={() => {
                localStorage.clear();
                setLoggedin(false);
              }}
            >
              Sign Out
            </Link>
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}
