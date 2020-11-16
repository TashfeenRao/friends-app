import { Container, Grid } from "@material-ui/core";
import AppBarComp from "../Provider/AppBar";
import CardComp from "../Provider/CardComp";

export default function Client({ filUsers }) {
  return (
    <>
      <AppBarComp />
      <Container maxWidth="xl">
        <Grid container spacing={1}>
          <Grid item xs={12}></Grid>
          {filUsers &&
            filUsers.map((user) => (
              <Grid key={user.id} item xs={12} sm={6} lg={4}>
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
}
