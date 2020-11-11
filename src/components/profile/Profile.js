import { Grid } from "@material-ui/core";
import NameBoard from "./NameBoard";
import DisplayPic from "./DisplayPic";

export default function Profile() {

  return (
    <Grid container spacing={6}>
      <Grid item xs={12} sm={2}>
        <DisplayPic />
      </Grid>
      <Grid item xs={12} sm={10}>
        <NameBoard />
      </Grid>
    </Grid>
  );
}
