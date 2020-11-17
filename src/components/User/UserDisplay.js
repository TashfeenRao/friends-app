import { Avatar } from "@material-ui/core";
import React from "react";
import useStyles from "../cutomHooks/UseStyles";

export default function UserDisplay({ image, username }) {
  const classes = useStyles();
  return (
    <Avatar alt="" src={image && image.url} className={classes.large}>
      {username}
    </Avatar>
  );
}
