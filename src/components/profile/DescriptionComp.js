import { CircularProgress, Paper, Typography, Link } from "@material-ui/core";
import React from "react";
import useStyles from "../cutomHooks/UseStyles";
import EditIcon from "@material-ui/icons/Edit";

export default function DescriptionComp({ setOpen, description, loading }) {
  const classes = useStyles();

  if (loading)
    return (
      <div style={{ position: "absolute", left: "75%", top: "18%" }}>
        <CircularProgress color="secondary" size={50} />
      </div>
    );
  return (
    <Paper
      className={classes.paper}
      style={{ backgroundColor: "#2E294E", color: "#F1E9DA" }}
    >
      <Typography variant="h6">
        Description:{" "}
        <Link
          component="button"
          color="secondary"
          onClick={() => setOpen(true)}
        >
          <EditIcon />
        </Link>
      </Typography>
      {description ? description : "Hi, I'm using friends app"}
    </Paper>
  );
}
