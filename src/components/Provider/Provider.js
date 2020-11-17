import { memo } from "react";
import { Container, Grid } from "@material-ui/core";
import AppBarComp from "../Profile/AppBar";
import CardComp from "../Profile/CardComp";

export default memo(function Provider({ filUsers }) {
  return (
    <>
      <AppBarComp />
      <Container maxWidth="xl">
        <Grid container spacing={1}>
          <Grid item xs={12}></Grid>
          {filUsers &&
            filUsers.map((user) => (
              <Grid key={user.id} item xs={12} sm={4}>
                <CardComp
                  username={user.username}
                  email={user.email}
                  id={user.id}
                  url={user.image && user.image.url}
                  description={user.description}
                />
              </Grid>
            ))}
        </Grid>
      </Container>
    </>
  );
});
