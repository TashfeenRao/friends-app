import { memo } from "react";
import { Grid } from "@material-ui/core";
import AppBarComp from "./AppBar";
import CardComp from "./CardComp";

export default memo(function Provider({ filUsers }) {
  return (
    <Grid container justify="center">
      <Grid item xs={12}>
        <AppBarComp />
      </Grid>
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
  );
});
