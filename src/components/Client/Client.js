import { Grid } from "@material-ui/core";
import AppBarComp from "../Provider/AppBar";
import CardComp from "../Provider/CardComp";

export default function Client({ filUsers }) {
  return (
    <Grid container justify="center">
      <Grid item xs={12}>
        <AppBarComp />
      </Grid>
      <Grid container justify="center" style={{ marginTop: "10px" }}>
        {filUsers &&
          filUsers.map((user) => (
            <Grid key={user.id} item xs={12} sm={4}>
              <CardComp
                username={user.username}
                email={user.email}
                id={user.id}
                url={user.image && user.image.url}
              />
            </Grid>
          ))}
      </Grid>
    </Grid>
  );
}
