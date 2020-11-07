import { Grid } from "@material-ui/core";
import AppBarComp from "../Provider/AppBar";
import CardComp from "../Provider/CardComp";

export default function Provider() {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <AppBarComp />
      </Grid>
      <Grid item xs={12}>
        <Grid container>
          <Grid item>
            <h1>All Clients</h1>
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
