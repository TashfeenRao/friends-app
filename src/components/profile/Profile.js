import { Avatar, Grid, makeStyles, Paper } from "@material-ui/core";
import NameBoard from "./NameBoard";
import img1 from "../../images/man.jpg";
import useStyles from "../cutomHooks/UseStyles";

export default function Profile() {
  const classes = useStyles();
  return (
    <Grid container spacing={6}>
      <Grid item xs={2}>
        <Avatar alt="Remy Sharp" src={img1} className={classes.large} />
      </Grid>
      <Grid item xs={10}>
        <NameBoard />
      </Grid>
      <Grid item xs={6}>
        <Paper className={classes.paper}>xs=6</Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper className={classes.paper}>xs=6</Paper>
      </Grid>
      <Grid item xs={3}>
        <Paper className={classes.paper}>xs=3</Paper>
      </Grid>
      <Grid item xs={3}>
        <Paper className={classes.paper}>xs=3</Paper>
      </Grid>
      <Grid item xs={3}>
        <Paper className={classes.paper}>xs=3</Paper>
      </Grid>
      <Grid item xs={3}>
        <Paper className={classes.paper}>xs=3</Paper>
      </Grid>
    </Grid>
  );
}
