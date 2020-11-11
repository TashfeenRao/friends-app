import { Grid } from "@material-ui/core";
import AppBarComp from "../Provider/AppBar";
import CardComp from "../Provider/CardComp";

export default function Client({ filUsers }) {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <AppBarComp />
      </Grid>
      <Grid item xs={12}>
        <h1>All Clients</h1>
      </Grid>
      {filUsers &&
        filUsers.map((user) => (
          <Grid key={user.id} item xs={12} sm={4}>
            <CardComp
              username={user.username}
              email={user.email}
              id={user.id}
              url={user.image.url}
            />
          </Grid>
        ))}
    </Grid>
  );
}
