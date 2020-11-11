import { Grid, Paper, Typography } from "@material-ui/core";
import React, { useContext } from "react";
import { userContext } from "../../App";
import useStyles from "../cutomHooks/UseStyles";

export default function NameBoard() {
  const { user } = useContext(userContext);
  const { username, description, email, role } = user;
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={12} sm={6}>
        <Paper className={classes.paper}>
          <Typography variant="h6">Username:</Typography>
          {username}
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Paper className={classes.paper}>
          <Typography variant="h6">Description:</Typography>
          {description && description}
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Paper className={classes.paper}>
          <Typography variant="h6">Email:</Typography>
          {email}
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Paper className={classes.paper}>
          <Typography variant="h6">Role:</Typography>
          {role ? "provider" : "client"}
        </Paper>
      </Grid>
    </Grid>
  );
}
