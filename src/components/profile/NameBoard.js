import { Grid, Link, Paper, Typography } from "@material-ui/core";
import React, { useContext, useState } from "react";
import EditIcon from "@material-ui/icons/Edit";
import { userContext } from "../../App";
import useStyles from "../cutomHooks/UseStyles";

export default function NameBoard() {
  const { user } = useContext(userContext);
  const [edit, setEdit] = useState(false);
  const { username, description, email, role } = user;
  const classes = useStyles();
  function EditDescription() {
    console.log("djsdnjsn");
    return <h1>Helooooo</h1>;
  }

  return (
    <>
      <Grid container>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <Typography variant="h6">Username:</Typography>
            {username}
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <Typography variant="h6">
              Description:{" "}
              <Link component="button" onClick={() => <EditDescription />}>
                <EditIcon />
              </Link>
            </Typography>
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
    </>
  );
}
