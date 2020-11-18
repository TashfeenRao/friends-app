import { Avatar } from "@material-ui/core";
import React from "react";
import useStyles from "../cutomHooks/UseStyles";

export default function UserDisplay({ user }) {
  const classes = useStyles();
  return (
    <Avatar
      alt=""
      src={user && user.image && user.image.url}
      className={classes.large}
    >
      {user && user.username[0].toUpperCase()}
    </Avatar>
  );
}
