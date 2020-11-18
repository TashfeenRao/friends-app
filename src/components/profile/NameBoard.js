import { Grid, Paper, Typography } from "@material-ui/core";
import useStyles from "../cutomHooks/UseStyles";
import FormDialog from "./FormDialog";
import { useEdit } from "../cutomHooks/useEdit";
import DescriptionComp from "./DescriptionComp";

export default function NameBoard() {
  const { loading, handleEdit, open, setOpen, user } = useEdit();
  const { username, description, email, type } = user;
  const classes = useStyles();

  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <Typography variant="h6">Username:</Typography>
            {username}
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <DescriptionComp
            setOpen={setOpen}
            loading={loading}
            description={description}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <Typography variant="h6">Email:</Typography>
            {email}
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <Typography variant="h6">Role:</Typography>
            {type === "provider" ? "provider" : "client"}
          </Paper>
        </Grid>
      </Grid>
      <FormDialog open={open} setOpen={setOpen} handleEdit={handleEdit} />
    </>
  );
}
