import { Container } from "@material-ui/core";
import AppBarComp from "../Profile/AppBar";
import Profile from "../Profile/Profile";

export default function ProviderProfile() {
  return (
    <>
      <AppBarComp />
      <Container maxWidth="lg">
        <Profile />
      </Container>
    </>
  );
}
