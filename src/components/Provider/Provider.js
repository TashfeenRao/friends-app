import { AppBar, Breadcrumbs, Grid, IconButton, Toolbar, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import AppBarComp from "./AppBar";
import CardComp from "./CardComp";

export default function Provider() {
  return (
    <Grid container direction="row">
      <Grid item xs={12}>
      <AppBarComp />
      </Grid>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={5}>
          <Grid item spacing={5}>
            <h1>All Providers</h1>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={4}>
        <CardComp />
      </Grid>
      <Grid item xs={12} sm={4}>
        <CardComp />
      </Grid>
      <Grid item xs={12} sm={4}>
        <CardComp />
      </Grid>
    </Grid>
  );
}
