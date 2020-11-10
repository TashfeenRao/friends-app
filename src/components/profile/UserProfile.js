import { Grid } from "@material-ui/core";
import React from "react";
import { useParams } from "react-router";

export default function UserProfile() {
  const { id } = useParams();
  return (
    <Grid container>
      <Grid item> hello from user profile of id: ${id} </Grid>
    </Grid>
  );
}
