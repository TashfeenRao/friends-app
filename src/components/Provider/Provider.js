import { Grid } from "@material-ui/core";
import AppBarComp from "./AppBar";
import CardComp from "./CardComp";

export default function Provider() {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
      <AppBarComp />
      </Grid>
      <Grid item xs={12}>
        <Grid container>
          <Grid item>
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
