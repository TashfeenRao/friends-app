import {
  CircularProgress,
  Grid,
  Paper,
  Typography,
  Link,
} from "@material-ui/core";
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
    <div>
      <Paper className={classes.paper}>
        <Typography variant="h6">
          Description:{" "}
          <Link component="button" onClick={() => setOpen(true)}>
            <EditIcon />
          </Link>
        </Typography>
        {description && description.url}
      </Paper>
    </div>
  );
}
