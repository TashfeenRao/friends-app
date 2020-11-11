import { Grid } from "@material-ui/core";
import AppBarComp from "./AppBar";
import CardComp from "./CardComp";

export default function Provider({ filUsers }) {
  return (
    <Grid container spacing={1} justify="center">
      <Grid item xs={12}>
        <AppBarComp />
      </Grid>
      <Grid item xs={12}>
        <h1>All Providers</h1>
      </Grid>
      {filUsers &&
        filUsers.map((user) => (
          <Grid key={user.id} item xs={12} sm={4}>
            <CardComp
              username={user.username}
              email={user.email}
              id={user.id}
            />
          </Grid>
        ))}
    </Grid>
  );
}
