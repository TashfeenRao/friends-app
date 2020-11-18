import { Grid, Paper, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "../cutomHooks/UseStyles";

export default function UserNameBoard({ user }) {
  const classes = useStyles();

  return (
    <Grid container spacing={1}>
      <Grid item xs={12} sm={6}>
        <Paper
          className={classes.paper}
          style={{ backgroundColor: "#2E294E", color: "#F1E9DA" }}
        >
          <Typography variant="h6">Username:</Typography>
          {user && user.username}
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Paper
          className={classes.paper}
          style={{ backgroundColor: "#2E294E", color: "#F1E9DA" }}
        >
          <Typography variant="h6">Description:</Typography>
          {user && user.description ? user.description : "I'm Using Serviso.."}
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Paper
          className={classes.paper}
          style={{ backgroundColor: "#2E294E", color: "#F1E9DA" }}
        >
          <Typography variant="h6">Email:</Typography>
          {user && user.email}
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Paper
          className={classes.paper}
          style={{ backgroundColor: "#2E294E", color: "#F1E9DA" }}
        >
          <Typography variant="h6">Role:</Typography>
          {user && user.type === "provider" ? "provider" : "client"}
        </Paper>
      </Grid>
    </Grid>
  );
}
